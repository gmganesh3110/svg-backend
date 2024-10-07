import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymodesService } from './paymodes.service';
import { CreatePaymodeDto } from './dto/paymode.dto';

@Controller('paymodes')
export class PaymodesController {
  constructor(private readonly paymodesService: PaymodesService) {}
}
