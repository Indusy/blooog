import { Injectable } from '@nestjs/common';
import process from 'process';

@Injectable()
export class InstallService {
  constructor() {}

  get os() {
    return process.platform
  }

  async checkPermission() {

  }

  async install() {
    
  }

}
