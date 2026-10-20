function App(){
  const nama = "Yusak";
  const jam = 9;

  return(
    <section>
      <h1 className="judul" style={{color: "blue"}}> Kantin {nama} </h1>
      <p>{(jam < 12) ? "Selamat Pagi" : "Selamat siang"}</p>
      <p>Saldo Awal Kartu kantin: Rp:{37 * 1000}</p>
      <button disabled={true}>Bayar</button>
    </section>
  );
}