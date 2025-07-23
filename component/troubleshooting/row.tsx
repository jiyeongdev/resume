import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { Style } from '../common/Style';
import { ITroubleshooting } from './ITroubleshooting';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: ITroubleshooting.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <i style={Style.gray}>{item.position}</i>
          <ul className="pt-3">
            {item.descriptions.map((description, descIndex) => (
              <li key={descIndex.toString()}>{formatDescription(description)}</li>
            ))}
            {createSkillKeywords(item.skillKeywords)}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function formatDescription(description: string) {
  const parts = description.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const text = part.slice(2, -2);
      return (
        <Badge
          style={Style.highlightBadge}
          key={index.toString()}
          color="secondary"
          className="mr-1"
        >
          {text}
        </Badge>
      );
    }
    return part;
  });
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={Style.skillKeywordBadge}
            key={index.toString()}
            color="secondary"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(startedAt: string, endedAt?: string) {
  const start = DateTime.fromFormat(startedAt, 'yyyy-LL');
  const end = endedAt ? DateTime.fromFormat(endedAt, 'yyyy-LL') : DateTime.now();
  const period = end.diff(start, ['years', 'months']).toObject();

  return (
    <div>
      <h4 style={Style.gray}>
        {start.toFormat('yyyy.LL')} ~ {endedAt ? end.toFormat('yyyy.LL') : '재직중'}
      </h4>
      <h6 style={Style.gray}>
        {period.years ? `${period.years}년 ` : ''}
        {period.months ? `${Math.round(period.months)}개월` : ''}
      </h6>
    </div>
  );
}
