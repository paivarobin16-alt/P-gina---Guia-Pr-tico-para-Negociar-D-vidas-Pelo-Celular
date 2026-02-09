export default function Home() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Nome Limpo em Ação</h1>
          <p>
            Guia prático e educativo para quem deseja negociar dívidas,
            organizar o nome e evitar golpes usando apenas o celular.
          </p>

          <a
            className="button"
            href="COLE_AQUI_SEU_LINK_DA_KIRVANO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero acesso imediato
          </a>
        </div>

        <img
          src="/cover.png"
          alt="Capa Nome Limpo em Ação"
          className="cover"
        />
      </section>

      {/* PARA QUEM É */}
      <section className="section">
        <h2>Para quem é este guia?</h2>
        <div className="list">
          <div className="card">✔ Pessoas com nome negativado</div>
          <div className="card">✔ Crédito ou cartão negado</div>
          <div className="card">✔ Quem quer negociar dívidas com segurança</div>
          <div className="card">✔ Quem busca informação clara e confiável</div>
        </div>
      </section>

      {/* O QUE APRENDE */}
      <section className="section">
        <h2>O que você vai aprender</h2>
        <div className="list">
          <div className="card">✔ Consultar dívidas pelo celular</div>
          <div className="card">✔ Evitar erros comuns</div>
          <div className="card">✔ Negociar direto com empresas</div>
          <div className="card">✔ Evitar golpes</div>
        </div>
      </section>

      {/* AVISO */}
      <section className="section">
        <h2>Aviso importante</h2>
        <div className="card">
          Este produto é educativo e não garante resultados instantâneos.
          Os resultados dependem da situação individual de cada pessoa.
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section center">
        <h2>Comece agora</h2>
        <p>Acesso imediato após a compra.</p>

        <a
          className="button"
          href="COLE_AQUI_SEU_LINK_DA_KIRVANO"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar o guia agora
        </a>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Nome Limpo em Ação — Conteúdo educativo.
      </footer>

    </div>
  );
}
