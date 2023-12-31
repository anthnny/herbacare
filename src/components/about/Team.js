import anthony from 'assets/img/anthony.jpeg'

const people = [
    {
      name: 'Anthony Lopez',
      role: 'Desarrollador Full Stack',
      imageUrl:
      'https://bafybeierhukupar4eti4gxpzzuskx6yuo2j2fk2w5k2d5l6o2fvzmhkmzu.ipfs.w3s.link/anthony.jpeg',
      twitterUrl: 'https://twitter.com/AnthnnyL',
    },
    {
      name: 'Anderson Merchan',
      imageUrl:
      'https://bafybeif7dn2vmg27qkit5wo35qnitqftvkbrlqldv5xy6mol7onwk52g34.ipfs.w3s.link/anderson.jpeg',
      role: 'Administrador del Proyecto',
      twitterUrl: '#',
    },
    {
      name: 'Dary Pincay',
      imageUrl:
      'https://bafybeic7xzqcsuyvsbpplb5gngzz7hpagygaqy7ftpwjgnjyl7d2q5rypa.ipfs.w3s.link/gatogod.jpg',
      role: 'Analista de Requerimientos',
      twitterUrl: '#',
    },
    {
      name: 'Michel Romero',
      imageUrl:
      'https://bafybeigdfq6uypbrbamisngwhqrlw27sk37tgritziuho67t4o4rwtllei.ipfs.w3s.link/michel.jpeg',
      role: 'Especialista en Control de Pruebas',
      twitterUrl: '#',
    },
    {
      name: 'Ruben Bones',
      imageUrl:
      'https://bafybeifr7lzp332vlza2dblkh3bnzbntosbqnkvbrm32byuojdet2avnmq.ipfs.w3s.link/ruben.jpeg',
      role: 'Especialista en Seguridad',
      twitterUrl: '#',
    },
  ]
  
  export default function Team() {
    return (
      <div className="bg-white">
        <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Team Developers</h2>
              <p className="text-xl text-gray-500">
                Estudiantes de 5to "A1" - Carrera Ingeniera en Software
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-3">
                      <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                    </div>
  
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500"  target="_blank" >
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }