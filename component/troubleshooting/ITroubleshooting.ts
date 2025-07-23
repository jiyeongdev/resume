import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace ITroubleshooting {
  export interface Payload extends ICommon.Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    where: string;
    descriptions: IRow.Description[];
    contribution?: string;
    notionLink?: string;
  }
}
