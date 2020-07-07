import { ProjectIDUniqueValidatorDirective } from './project-idunique-validator.directive';
import { ProjectsService } from './projects.service';

describe('ProjectIDUniqueValidatorDirective', () => {
  it('should create an instance', () => {
   
    const directive = new ProjectIDUniqueValidatorDirective();
    expect(directive).toBeTruthy();
  });
});
