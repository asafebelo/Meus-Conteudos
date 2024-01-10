<h1 align="center"><span style ="color: #DC143C">Trend Vision One: Understading the Basics</h1>

##### Coletando telemetria usando Vision One

Os dados coletados dos dispositivos pelo Vision One são divididos em:

- Eventos: Dados capturados nos dispositivos de monitoramento, como capturas de malware, atividades de prevenção de invasores e etc.
- Atividades: Alteração de registros, criação e exclusão de usuários, tarefas agendadas e conexão de rede com domínios, etc.
- Outros dados: Dados coletados de terceiros, como tentativas de login, detalhes de dispositivos conectados.

Os sensores de endpoints, Workloads, servidores, rede e e-mail coletam telemetria bruta de eventos e atividades e são enviados para o Trend Micro Data Lake para análise.

O Vision One tem a capacidade de voletar dados de endpoints, servidores por meio de sendores, mesmo que nenhum agente da Trend esteja instalado. Quanto mais fontes de dados habilitadas no Vision One, maior contexto para os eventos, que podem se tornar indicadores significativos de comprometimento, permitindo a organização conter rapidamente.

Dados coletados por dispositivo:

- Rede: Tráfego, ataques Web, ameaças em comunicação
- Servidores e Workloads: Detecções de alta fidelidade para servidores, visibilidade e suporte para Sistemas Operacionais, Máquinas Virtuais e Contêineres de nuvem pública e privada
- E-mail: Integração de email no nível de aplicação fornece visibilidade da caixa de email. Com integrações via API, o Vision One pode localizar e colocar emails em quarentena
- Mobile: Integração com o Trend Mobile Security permite que o Vision One detalhe ameaças de dispositivos móveis, incluindo iOS, Android e Chrome Books
- Endpoints: Identificar o antes e o agora nesses dispositivos. Correlacionar e identificar ameaças ocultas, identificar como essas ameças estão se propagando
- Cloud: Arquivos considerados suspeitos são enviados para análise ao Cloud Sandbox. Os resultados dessas análises são armazenados no Data Lake e podem ser usados como parte da investigação.
- Integração de terceiros: Aumentar o escopo de dados e permitir que o Vision One compartilhe e receba dados de fontes externas.
- Sensores Web: Visibilidade da atividade de usuários e dispositivos gerenciados. Ajudam a descobrir os apps baseados na web que estão sendo acessados por dispositivos e usuários dentro e fora da rede corporativa

---

##### Integrações com Trend Vision One

O product connector gerencia e registra os produtos e serviços no Vision One. Os sensores devem ser instalados nos dispositivos gerenciados por esses produtos. O Vision One conecta os produtos suportados por SaaS e no local da Trend (On-Prem) como fonte de dados que alimentam os recursos XDR e ASRM do Vision One.

Os produtos compatíveis tem configurações que permitem que o Vision One acesse os dados necessários para detecções e avaliações de risco. Produtos da Trend Micro compatíveis com integrações:

- Apex One: Solução para endpoints
- Cloud One: Solução para servidores e Workloads em nuvem
- Deep Security: Solução para proteção contra vulnerabilidades em nuvens, ambientes virtuais e físicos e contêineres
- Cloud App: Solução para proteção de aplicativos web e e-mail
- Web Security: Detectar riscos de segurança na web e controlar acesso a aplicativos da internet
- Mobile Security: Proteção de dispositivos móveis
- Deep Discovery: Monitoramento de tráfego da rede
- Tipping Point: Solução de hardware para proteção de invasões e monitoramento da rede

###### Integrações de terceiros com Vision One

Os motivos para integrações com terceiros: Aprimoramento da visiblidade dos riscos, enriquecimento da percepção e detecção de ameaças e ações de resposta. As integrações com terceiros se dividem nos seguintes grupos:

- Simulação de violação e ataque: Permite que os terceiros extraiam eventos do Vision One para simular ataques em endpoints e verificar informações de ataque
- Gerenciamento de serviços em TI: Permite que o Vision One envie alertas do Workbench como tickets de serviço a sites gerenciados
- Serviços Cloud: Compilar uso e atividades em aplicativos
- Compartilhamento de inteligência contra ameaças: integrar dados de indicadores de comprometimento (IOC) de fontes de inteligência de terceiros
- Gerenciamento de identidade e acesso: Monitora tentativas de login, redefinição de senha, desabilitar ou habilitar conta de usuário, atividades de aplicativos em nuvem e detecções de anomalias
- Web Access: O aplicativo Trend Risk Insights conecta seus dados do Splunk aos Data Lakes, revelando pegadas de acesso a Web com base no Firewall e do Web Gateway
- Informações de segurança e gerenciamento de eventos: A integração com SIEM de terceiros permite o compartilhamento de alertas do Workbench para gerenciamento unificado das informações do evento
- Gerenciamento de vulnerabilidades: A integração com produtos de terceiros permite que o Vision One descubra dispositivos, alimente resultados de verificação de vulnerabilades de dispositivos e forneça acesso aos seguintes relatórios:
  - Sistemas Operacionais com CVEs altamente exploráveis
  - Aplicativos com CVEs altamente exploráveis
- Orquestração, automação e resposta de segurança: A integração com produtos de SOAR de terceiros permitea automação de respostas a incidentes, coletando alertas. Gerenciando casos e respondendo aos alertas gerados por um SIEM. Além de criar fluxos de trabalhos adaptáveis e automatizados.
- Integração com dispositivos móveis: Permite que o Vision One implante automaticamente o agente de segurança móvel em dispositivos iOS e Android.
- Firewall e proteção de redes: Permite a coordenação de dados de objetos suspeitos, entre os terceiros e o Vision One. A sincronização dessas informações entre o Vision One e vários produtos de terceiros fortalece as medidas de segurança dentro do ambiente, além de mover o bloqueio dos objetos suspeitos para o perímetro da rede.
- Logon Único: O SAML Single Sign-On está disponível para autenticação de administrador no console Vision One. O Vision One oferece suporte ao protocolo SAML 2. O conforme definido pela OASIS.
- API Trend Vision One: Uma API restful está disponível para criação de suas próprias integrações. Essa API pode ser usada para integrar o encaminhamento de mensagens e alertas a um canal do Microsoft Teams ou Slack.

---

##### Licensiamento do Trend Vision One

A Trend Micro oferece uma maneira flexível de adotar o Vision One: Licensiamento a base de **créditos**. Esses crédito são a unidade de licensiamento universal do Vision One. Esse modlelo permite que a empresa compre o Vision One uma única vez, independente da maneira como ele será implementado. Cada recurso tem diferentes requisitos de crédito (endpoint, server e-mail, mobile). Os créditos podem ser realocados a qualquer momento, diretamente do console no Vision One. O Vision One tem uma calculadora que estima o número de créditos necessários para monitorar a infraestrutura do seu ambiente.

Para calcular, basta adicionar o número de sensores, endpoints/servidores, contas de e-mail e etc. Depois da compra dos créditos, eles serão alocados automaticamente quando um novo sensor for ativado. Quando o sensor é desativado, os créditos alocal nele voltam para o conjunto de créditos disponíveis, permanecendo ali. Após todos os créditos serem alocados, você pode comprar mais entrando em contato com a Trend ou realocando sensores ou apps.

---

<h6>Fim</h6>
