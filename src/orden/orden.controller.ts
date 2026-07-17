import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenService } from './orden.service';

@Controller('orden')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) { }

  @Get()
  findByUnit() {
    return this.ordenService.findByUnit();
  }

  @Get('byDate')
  findByDate() {
    return this.ordenService.findByDate();
  }

  // @Get()
  // findAll() {
  //   return this.ordenService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ordenService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrdenDto: UpdateOrdenDto) {
  //   return this.ordenService.update(+id, updateOrdenDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ordenService.remove(+id);
  // }
}
