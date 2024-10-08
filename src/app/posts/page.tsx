// src/app/posts/page.tsx
export default function PostsPage() {
    const posts = [
      {
        id: 1,
        title: "Next.js ganha popularidade entre desenvolvedores",
        date: "10/10/2023",
        summary: "O framework Next.js tem conquistado cada vez mais adeptos por sua simplicidade e desempenho em produção...",
      },
      {
        id: 2,
        title: "5 dicas para melhorar sua produtividade como desenvolvedor",
        date: "08/10/2023",
        summary: "Descubra como otimizar seu tempo e aumentar a eficiência no dia a dia com ferramentas e técnicas de produtividade...",
      },
      {
        id: 3,
        title: "Tailwind CSS: O futuro dos frameworks de CSS utilitários",
        date: "05/10/2023",
        summary: "O Tailwind CSS continua a crescer em popularidade entre desenvolvedores front-end devido à sua abordagem flexível e poderosa...",
      },
      {
        id: 4,
        title: "React 18: Novos recursos e o que esperar",
        date: "02/10/2023",
        summary: "A versão mais recente do React traz várias melhorias de desempenho e novos recursos que facilitam o desenvolvimento...",
      },
      {
        id: 5,
        title: "JavaScript: Ainda o rei das linguagens de programação?",
        date: "28/09/2023",
        summary: "Com a crescente adoção de novas linguagens, JavaScript ainda se mantém como a principal escolha para desenvolvedores em 2023...",
      },
    ];
  
    return (
      <section className="bg-white p-6 shadow-lg rounded-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Posts Recentes</h2>
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-4">
              <h3 className="text-2xl font-semibold text-blue-600 hover:underline cursor-pointer">{post.title}</h3>
              <p className="text-gray-500 text-sm">Publicado em {post.date}</p>
              <p className="text-gray-700 mt-2">{post.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  