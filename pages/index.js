import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nome Limpo em Ação | Guia Prático</title>
        <meta
          name="description"
          content="Guia educativo para negociar dívidas, organizar o nome e evitar golpes usando apenas o celular."
        />
      </Head>

      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <strong className="logo">NOME LIMPO EM AÇÃO</strong>
          <a
            href="COLE_AQUI_SEU_LINK_DA_KIRVANO"
            className="header-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GARANTIR GUIA
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <span className="tag">GUIA EDUCATIVO FINANCEIRO</span>
            <h1>
              ORGANIZE SUAS DÍVIDAS <br />
              COM <span>SEGURANÇA E CLAREZA</span>
            </h1>
            <p>
              Aprenda como negociar dívidas, evitar golpes e organizar
              sua situação financeira usando apenas o celular.
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

          <div className="hero-image">
            <img src="/cover.png" alt="Nome Limpo em Ação" />
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section dark">
        <h2>Este guia é para você que:</h2>

        <div className="cards">
          <div className="card">Está com o nome negativado</div>
          <div className="card">Teve crédito ou cartão negado</div>
          <div className="card">Quer negociar dívidas com segurança</div>
          <div className="card">Busca informação clara e confiável</div>
        </div>
      </section>

      {/* O QUE VOCÊ APRENDE */}
      <section className="section">
        <h2>O que você vai aprender</h2>

        <div className="cards">
          <div className="card">Consultar dívidas pelo celular</div>
          <div className="card">Negociar corretamente</div>
          <div className="card">Evitar erros comuns</div>
          <div className="card">Evitar golpes financeiros</div>
          <div className="card">Prazo correto de regularização</div>
        </div>
      </section>

      {/* AVISO */}
      <section className="section dark">
        <h2>Aviso importante</h2>
        <p className="legal">
          Este material possui caráter educativo. Não garantimos resultados
          instantâneos. Os resultados dependem da situação individual
          e da negociação com as empresas credoras.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>Comece agora</h2>
        <p>Acesso imediato após a compra</p>

        <a
          href="COLE_AQUI_SEU_LINK_DA_KIRVANO"
          className="cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          GARANTIR MEU GUIA
        </a>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Nome Limpo em Ação · Conteúdo educativo
      </footer>
    </>
  );
        }
