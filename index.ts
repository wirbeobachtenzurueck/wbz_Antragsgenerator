import * as Buffer from 'node:buffer';
import type { DataObject } from './types.js';
import { PDF } from './pdf-generator/pdfgen.js';
import dayjs from 'dayjs';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import "pdfjs-dist/build/pdf.worker.mjs";

let pdf_blob: Blob;

const alert_container = (<HTMLDivElement>document.getElementById('alert-container'));
const submit_button = (<HTMLButtonElement>document.getElementById('submit-button'));
const download_button = (<HTMLButtonElement>document.getElementById('download-button'));

const date_of_birth = (<HTMLInputElement>document.getElementById('geburtsdatum'));

const validateInputs = (data: DataObject) => {
    if (data.name.length > 70) {
      alert('Bitte geben Sie einen Namen ein. (maximal 70 Zeichen)');
      return false;
    }
  
    if (data.street.length > 20) {
      alert('Bitte geben Sie eine Straße ein. (maximal 20 Zeichen)');
      return false;
    }
  
    if (data.zip_code.length > 5 && !/^\d{5}$/.test(data.zip_code)) { 
      alert('Bitte geben Sie eine Postleitzahl ein.');
      return false;
    }
  
    if (data.city.length > 20) {
      alert('Bitte geben Sie einen Ort (Stadt) ein. (maximal 20 Zeichen)');
      return false;
    }
  
    if (data.place_of_birth.length > 32) {
      alert('Bitte geben Sie einen Geburtsort ein. (maximal 32 Zeichen)');
      return false;
    }

    if (data.date_of_birth && !/^\d{2}\.\d{2}\.\d{4}$/.test(data.date_of_birth)) { 
      alert('Bitte geben Sie ein korrektes Geburtsdatum ein');
      return false;
    }
    
  
    if (data.reason.length > 3000) {
      alert('Bitte geben Sie einen Grund für Ihre Anfrage ein. (maximal 3000 Zeichen)');
      return false;
    }
  
    if (!data.offices.length) {
      alert('Bitte wählen Sie mindestens eine Behörde aus.');
      return false;
    }
  
    return true;
}

const renderPDF = async () => {
  try {
    const pdf_container = document.getElementById('pdf-container');
    const pdf_viewer = document.getElementById('pdf-viewer')

    if(pdf_viewer && pdf_viewer.innerHTML != '') pdf_viewer.innerHTML = '';
    if(pdf_container && pdf_container.style.display != 'none') pdf_container.style.display = 'none';
    if(alert_container.style.display != 'flex') alert_container.style.display = 'flex';

    const data: DataObject = {
      name: (<HTMLInputElement>document.getElementById('name')).value.trim(),
      street: (<HTMLInputElement>document.getElementById('strasse')).value.trim(),
      zip_code: (<HTMLInputElement>document.getElementById('postleitzahl')).value.trim(),
      city: (<HTMLInputElement>document.getElementById('stadt')).value.trim(),
      place_of_birth: (<HTMLInputElement>document.getElementById('geburtsort')).value,
      date_of_birth: date_of_birth.value.split('-').reverse().join('.'),
      reason: (<HTMLInputElement>document.getElementById('grund')).value.trim(),
      offices: Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(office => office.id)
    };

    if(!validateInputs(data)) {
      return alert_container.style.display = 'none';
    }

    const pdf = new PDF(data).generatePDF()

    if(!pdf) return;

    pdf.getBuffer(async (buffer) => {
      if(!buffer) return;

      const pdf_doc = await pdfjs.getDocument(buffer).promise;
      
      pdf_doc.getData().then((res) => {
        pdf_blob = new Blob([res], { type: 'pdf/application' });
      })

      const scale = 1;

      const num_pages = await pdf_doc.numPages;
      const page_promises = [];

      for(let i = 1; i <= num_pages; i++) {
        const page_promise = pdf_doc.getPage(i).then(page => {
          const viewport = page.getViewport({ scale: scale });
          const canvas = document.createElement('canvas');

          const canvas_context = canvas.getContext('2d');
          if(!canvas_context) return;

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const render_context = {
            canvasContext: canvas_context,
            viewport: viewport
          }

          return page.render(render_context).promise.then(() => {
            canvas_context.drawImage(canvas, 0, 0)
            return canvas;
          })
        })
        page_promises.push(page_promise);
      }
      const rendered_pages = await Promise.all(page_promises);

      const pdf_preview = document.createElement('div');

      pdf_preview.id = 'pdf-preview';

      if(!pdf_viewer || !pdf_container) return;
      if(pdf_viewer.innerHTML != '') return pdf_viewer.innerHTML = '';

      pdf_viewer.appendChild(pdf_preview);

      rendered_pages.forEach(page => {
        if(!page) return;
          pdf_preview.appendChild(page);
      })
      alert_container.style.display = 'none';
      pdf_container.style.display = 'flex';
      if(download_button) download_button.style.display = 'block';
    })
  } catch (e) {
    return console.error(e)
  }
}

const downloadPDF = (blob: Blob): Promise<void> => {
  return new Promise((resolve, reject) => {
      const urlCreator = window.URL || window.webkitURL;
      const blobUrl = urlCreator.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `wbz_behoerden-${dayjs().format('YYYY-MM-DD-hh-mm-ss')}.pdf`;
      a.click();

      resolve();
  });
}

const validateDob = (ev: KeyboardEvent) => {
  const target = (<HTMLInputElement>ev.target);

  if(/Backspace|\d/.test(ev.key)) {
    if(ev.key == 'Backspace') return target.value.slice(target.value.length, target.value.length - 1);
    if(target.value.length == 2 || target.value.length == 5) return target.value += '.';
  } else {
    return ev.preventDefault()
  }
}

date_of_birth.addEventListener('keydown', (ev) => {validateDob(ev)});

download_button.addEventListener('click', async () => { await downloadPDF(pdf_blob); })

submit_button.addEventListener('click', async () => {
  alert_container.style.display = 'flex';
  await renderPDF();
});