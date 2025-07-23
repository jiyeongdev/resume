import { PropsWithChildren } from 'react';
import { ITroubleshooting } from './ITroubleshooting';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import { EmptyRowCol } from '../common';

export default function TroubleshootingRow({
  payload,
}: PropsWithChildren<{ payload: ITroubleshooting.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(payload: ITroubleshooting.Item): IRow.Payload {
  // const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  // const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
  //   DATE_FORMAT.YYYY_DOT_LL,
  // );
  const title = (() => {
    return '🔨';
    // if (payload.endedAt) {
    //   const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
    //     DATE_FORMAT.YYYY_DOT_LL,
    //   );
    //   return `${startedAt} ~ ${endedAt}`;
    // }
    // return `${startedAt} ~`;
  })();

  return {
    left: {
      title,
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
      notionLink: payload.notionLink,
    },
  };
}
