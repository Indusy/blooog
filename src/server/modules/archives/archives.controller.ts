import { Controller, Get } from '@nestjs/common';
import path from 'path';
import { ArchivesService } from './archives.service';

@Controller('archives')
export class ArchivesController {
  constructor(private readonly archivesService: ArchivesService) {}

  @Get()
  async index() {
    const article = this.archivesService.markdownd(path.resolve(__dirname, "../../../../../blooog/_posts/你好啊.md"));
    return this.archivesService.injectTemplate(path.resolve(__dirname, "../../../../../blooog/themes/yanren/index.ejs"), article)
  }
}
