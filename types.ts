interface DataObject {
    name: string;
    street: string;
    zip_code: string;
    city: string;
    date_of_birth: string;
    place_of_birth: string;
    reason: string;
    offices: Array<string>;
}

interface OfficeObject {
    name: string;
    office: string;
    office_long?: string;
    department: string;
    address: string;
    postal: string;
    country: string;
    fax?: string;
    law: string;
}

interface PageOptions {
    margin: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }
    padding: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    },
    height: number;
    width: number;
}

interface OfficesObject<T> {
    [key: string]: OfficeObject;
}

export type { DataObject, OfficeObject, OfficesObject, PageOptions };