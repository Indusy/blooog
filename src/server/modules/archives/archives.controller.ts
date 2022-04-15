import { Controller, Get } from '@nestjs/common';
import path from 'path';
import { ArchivesService } from './archives.service';

@Controller('archives')
export class ArchivesController {
  constructor(private readonly archivesService: ArchivesService) {}

  @Get()
  async index() {
    return this.archivesService.markdownd(path.resolve(__dirname, "../../../../../blooog/_posts/你好啊.md"))
  }
}
