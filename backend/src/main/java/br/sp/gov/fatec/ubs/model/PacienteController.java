package br.sp.gov.fatec.ubs.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
public class PacienteController {
    @Autowired
    PacienteRepository bd;

    @PostMapping("api/paciente")
     public String gravar(@RequestBody PacienteEntity obj){
     bd.save(obj);
     return "paciente gravado com sucesso";
    }


    
}
