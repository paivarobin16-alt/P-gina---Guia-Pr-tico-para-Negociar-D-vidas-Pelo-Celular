import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nome Limpo em Ação | Organização Financeira</title>
        <meta
          name="description"
          content="Conteúdo informativo para organizar dívidas, negociar com segurança e tomar decisões financeiras com mais clareza usando apenas o celular."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <div className="logo">NOME LIMPO EM AÇÃO</div>
          <a
            href="COLE_AQUI_SEU_LINK_DA_KIRVANO"
            className="header-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GARANTIR ACESSO
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div>
            <span className="tag">CONTEÚDO INFORMATIVO FINANCEIRO</span>

            <h1>
              ORGANIZE SUAS DÍVIDAS <br />
              COM <span>SEGURANÇA</span> E <span>CLAREZA</span>
            </h1>

            <p>
              Aprenda como negociar dívidas, evitar golpes e organizar
              sua situação financeira de forma simples, usando apenas
              o celular.
            </p>

            <a
              href="COLE_AQUI_SEU_LINK_DA_KIRVANO"
              className="cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              GARANTIR MEU ACESSO
            </a>
          </div>

          <img
            src="/cover.png"
            alt="Nome Limpo em Ação"
          />
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section">
        <h2>Este conteúdo é para você que:</h2>

        <div className="cards">
          <div className="card">📄 Está com o nome negativado</div>
          <div className="card">💳 Teve crédito ou cartão negado</div>
          <div className="card">🤝 Quer negociar dívidas com segurança</div>
          <div className="card">🔍 Busca informação clara e confiável</div>
        </div>
      </section>

      {/* O QUE VOCÊ APRENDE */}
      <section className="section">
        <h2>O que você vai aprender</h2>

        <div className="cards">
          <div className="card">📱 Consultar dívidas pelo celular</div>
          <div className="card">✍️ Negociar corretamente</div>
          <div className="card">⚠️ Evitar erros comuns</div>
          <div className="card">🛡️ Evitar golpes financeiros</div>
          <div className="card">⏱️ Entender prazos de regularização</div>
        </div>
      </section>

      {/* TRANSPARÊNCIA */}
      <section className="section">
        <h2>Transparência e responsabilidade</h2>
        <p className="transparency">
          Este conteúdo foi desenvolvido para orientar decisões financeiras
          com base em práticas legais, organização e informação clara,
          respeitando a realidade individual de cada pessoa.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Comece agora</h2>
        <p>Acesso imediato após a confirmação da compra</p>

        <a
          href="COLE_AQUI_SEU_LINK_DA_KIRVANO"
          className="cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          GARANTIR MEU ACESSO
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Nome Limpo em Ação · Conteúdo informativo
      </footer>
    </>
  );
              }
