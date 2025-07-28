import { Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class getUserParam {
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  isMarried: Boolean;
}
