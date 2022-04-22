import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { Livro } from "./book.model";
import { LivrosService } from "./books.service";

@Controller('livros') // URL: http://localhost:3000/livros
export class LivrosController {
    constructor(private livrosService: LivrosService) {
    
    }
    @Get()
    async obterTodos(): Promise<Livro[]> { 
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id); // params.id
    }

    @Post()
    async criar(@Body() livro : Livro) {
       this.livrosService.criar(livro);
    }

    @Put()
    async alterar(@Body() livro : Livro): Promise<[number, Livro[]]> {
        return this.livrosService.alterar(livro);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.livrosService.apagar(params.id);
    } 
}