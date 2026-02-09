import "../styles/globals.css";

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
          >
            Quero acesso imediato
          </a>
        </div>

        <img
          src="/cover.png"
          alt="Capa Nome Limpo em Ação"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </section>

      {/* PARA QUEM É */}
      <section className="section">
        <h2>Para quem é este guia?</h2>
        <div className="list">
          <div className="card">✔ Pessoas com nome negativado</div>
          <div className="card">✔ Quem teve cartão ou crédito negado</div>
          <div className="card">✔ Quem quer negociar dívidas com segurança</div>
          <div className="card">✔ Quem busca informação clara e confiável</div>
        </div>
      </section>

      {/* O QUE VOCÊ APRENDE */}
      <section className="section">
        <h2>O que você vai aprender</h2>
        <div className="list">
          <div className="card">✔ Como consultar dívidas pelo celular</div>
          <div className="card">✔ Quais erros evitar ao negociar</div>
          <div className="card">✔ Como negociar diretamente com empresas</div>
          <div className="card">✔ Mensagens prontas para negociação</div>
          <div className="card">✔ Como evitar golpes</div>
        </div>
      </section>

      {/* AVISO */}
      <section className="section">
        <h2>Aviso importante</h2>
        <div className="card">
          Este material possui caráter educativo.
          Não garantimos resultados instantâneos.
          Os resultados dependem da situação individual
          e da negociação com as empresas credoras.
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2>Comece agora</h2>
        <p style={{ marginTop: 10 }}>
          Acesso imediato ao conteúdo após a compra.
        </p>
        <a
          className="button"
          href="COLE_AQUI_SEU_LINK_DA_KIRVANO"
          target="_blank"
        >
          Acessar o guia agora
        </a>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        © {new Date().getFullYear()} Nome Limpo em Ação — Conteúdo educativo.
      </footer>
    </div>
  );
        }
