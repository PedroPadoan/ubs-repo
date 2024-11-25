import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
    nomeCompleto: String = '';
    nomeSocial: String = '';
    nomeMae: String = '';
    nomePai: String = '';
    dataNascimento: String = '';
    sexo: String = '';
    nacionalidade: String = '';
    municipioNascimento: String = '';
    racaCor: String = '';
    frequentaEscola: boolean = false;
    escolaridade: String = '';
    situacaoFamiliar: String = '';
    vinculo: String = '';
    cadastro: String = '';
    deficienciaVisual: boolean = false;
    deficienciaAuditiva: boolean = false;
    deficienciaMotora: boolean = false;
    deficienciaIntelectual: boolean = false;
    celular: String = '';
    residencial: String = '';
    comercial: String = '';
    contato: String = '';
    email: String = '';
    origemEndereco: String = '';
    endereco: String = '';
    cpf: String = '';
    identidade: String = '';


 onSubmit(): void {
  console.log("Formulário enviado:", this);
 }
}
