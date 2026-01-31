import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/product/:id", (req, res) => {
  const { id } = req.params;

  const product = {
    id,
    title: `Produto ${id}`,
    description: `Descrição do produto ${id}`,
    image: `https://kolleclub.com/images/${id}.jpg`,
    url: `https://kolleclub.com/ProductDetails?id=${id}`,
  };

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>${product.title}</title>
      <meta name="description" content="${product.description}">
      <meta property="og:title" content="${product.title}">
      <meta property="og:description" content="${product.description}">
      <meta property="og:image" content="${product.image}">
      <meta property="og:url" content="${product.url}">
      <meta property="og:type" content="website">
    </head>
    <body>
      <script>
        window.location.href = "${product.url}";
      </script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
