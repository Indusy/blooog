import { Injectable } from '@nestjs/common';
import MarkDownIt from "markdown-it"
import fs from "fs"
const md = new MarkDownIt();

@Injectable()
export class ArchivesService {
  markdownd(path: string) {
    return md.render(fs.readFileSync(path).toString())
  }
}
