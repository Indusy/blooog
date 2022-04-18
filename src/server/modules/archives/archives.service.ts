import { Injectable } from '@nestjs/common';
import { md2html } from 'src/utils/md2html';
import fs from "fs"
import ejs from "ejs"
import configuration from "../../../utils/config"

@Injectable()
export class ArchivesService {
  markdownd = md2html

  async injectTemplate(path: string, markdown: string) {
    // const template = fs.readFileSync(path).toString()
    // console.log(configuration);
    return await new Promise((resolve, reject) => {
      ejs.renderFile(path,{
        title: configuration.title,
        subtitle: "二次元刀哥",
        content: markdown
      }, (err, str) => {
        if(err) reject(err)
        resolve(str)
      })
    });
  }
}
