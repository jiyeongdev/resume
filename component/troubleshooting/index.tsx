import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { ITroubleshooting } from './ITroubleshooting';
import ProjectRow from './row';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ITroubleshooting.Payload;

export const Troubleshooting = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="TROUBLESHOOTING">
      <ProjectRow payload={payload as any} />
    </CommonSection>
  );
}
