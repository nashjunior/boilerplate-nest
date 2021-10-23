import { Module } from '@nestjs/common';
import { ScriptCaseService } from './script-case.service';

@Module({
  providers: [ScriptCaseService],
  exports: [ScriptCaseService],
})
export class ScriptCaseModule {}
