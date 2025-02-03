import { 
  AtividadeFisica, 
  DietaAlimentar, 
  IntensidadeAtividadesFisicas, 
  ObjetivoFinal, 
  RestricaoAlimentar, 
  Sexo 
} from '@/src/domain/types/conta'

export interface ContaModel {
    id: string,
    nome: string,
    email: string,
    idade: number,
    sexo: Sexo,
    altura: number,
    peso: number,
    password: string,
    atividades_fisicas?: Array<AtividadeFisica>,
    outras_atividades_fisicas?: string,
    intensidade_atividades_fisicas?: IntensidadeAtividadesFisicas,
    qtd_horas_semanais_pratica_atividades_fisicas?: number,
    alergias?: Array<string>,
    intolerancias_alimentares?: Array<string>,
    dieta_alimentar?: DietaAlimentar,
    restricoes_alimentares?: Array<RestricaoAlimentar>,
    orcamento_alimentar_semanal?: number,
    objetivo_final: ObjetivoFinal,
    data_alcancar_objetivo?: string,
    token_acesso?: string
}
