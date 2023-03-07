import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '/icons/landingpage.svg',
    name: 'Landing pages',
    description: 'Desenvolvidas estratégicamente para aumentar as taxas de conversão e alavancar seu negócio. Despertam a curiosidade, criam interesse e provocam desejo no público alvo, de modo que ele faça um pedido de orçamento ou de acesso à algum conteúdo. Isso agrega valor e gera leads, que posteriormente se tornarão bons clientes.',
    image: 'images/landingpage.png'
  },
  {
    icon: '/icons/desktop.svg',
    name: 'Hubs',
    description: 'Sistema na forma de um WebApp de uso interno às empresas, fornecedores e clientes, essencial para uma boa gestão. Pode incluir serviços de gestão financeira, gestão de projetos, gestão de tarefas, relatórios em tempo real, vendas, automações e integrações com outros sistemas.',
    image: 'images/hub.png'
  },
  {
    icon: 'icons/ecommerce.svg',
    name: 'Lojas virtuais',
    description: 'Você tem milhares de clientes em potencial, que estão se sentindo muito à vontade para gastar dinheiro online e só precisam de um pouco de motivação para gastá-lo com você. Usando as melhores tecnologias do mercado, construimos e-commerces escaláveis e sob medida, com dados em tempo real e um sistema de gerenciamento de pedidos.',
    image: 'images/ecommerce.png'
  },
  {
    icon: '/icons/website.svg',
    name: 'Websites',
    description: 'Essencial para a presença online de qualquer negócio, crucial para gerar resultados. Quebre todas as barreiras geográficas e mostre quem você é e o que você faz. É o centralizador das estratégias de comunicação e quem vai construir sua imagem e credibilidade.',
    image: 'images/website.png'
  },
  {
    icon: '/icons/mobile.svg',
    name: 'Apps',
    description: 'Aprimora o atendimento e experiência do usuário. Fortalecemos sua marca construindo um app multiplataforma, que rode no Android e IOS, e que use todos os recursos do seu aparelho, como câmera, geolocalização e notificações push. Fazemos isso usando React Native, tecnologia do Facebook, usada também por empresas como Tesla, Airbnb, Uber e Microsoft.',
    image: 'images/app.png'
  },
  {
    icon: '/icons/desktop.svg',
    name: 'Desktop',
    description: 'Geralmente usados para automatizar processos de manipulação de arquivos e manter aplicações independentes da internet, pois mantém setores em funcionamento mesmo com problemas de rede, usam recursos do sistema operacional e suportam grandes entradas de dados, possibilitando automações incríveis.',
    image: 'images/desktop.png'
  },
];

export default function ServiceTabs() {
  const tilt = useRef<HTMLElement>(null)
  const [service, setService] = useState(services[0]);

  useEffect(() => {
    let el = tilt?.current as HTMLElement
    const height = el.clientHeight
    const width = el.clientWidth
  
    el.addEventListener('mousemove', handleMove)
    function handleMove(e: any) {
      /*
        * Get position of mouse cursor
        * With respect to the element
        * On mouseover
        */
      /* Store the x position */
      const xVal = e.layerX
      /* Store the y position */
      const yVal = e.layerY
      /*
        * Calculate rotation valuee along the Y-axis
        * Here the multiplier 20 is to
        * Control the rotation
        * You can change the value and see the results
        */
      const yRotation = 20 * ((xVal - width / 2) / width)
      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - height / 2) / height)
      /* Generate string for CSS transform property */
      const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      /* Apply the calculated transformation */
      el.style.transform = string
    }
  
    /* Add listener for mouseout event, remove the rotation */
    el.addEventListener('mouseout', () => el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)')
    /* Add listener for mousedown event, to simulate click */
    el.addEventListener('mousedown', () => el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)')
    /* Add listener for mouseup, simulate release of mouse click */
    el.addEventListener('mouseup', () => el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)')
  }, [tilt])

  return (
    <div className='relative flex flex-col items-center w-full h-full px-3 overflow-hidden bg-black rounded-3xl md:rounded-none sm:bg-secondaryBrand'>
      {/* <img src="icons/circles2.svg" alt="" className="animate-pulse hidden h-[30rem] w-[30rem] absolute -left-60 top-[40%] -translate-y-1/2 md:block" /> */}
      <img src="icons/circles1.svg" alt="" className="animate-spin-slow hidden h-[30rem] w-[30rem] absolute -right-24 bottom-60 md:block select-none" />

      <div className='z-10 flex flex-col w-full max-w-6xl gap-10 border-t-2 py-14 md:gap-20 md:py-28 border-t-black/5'>
        <header className="flex flex-col gap-5">
          <h1 className='flex-initial text-white sm:text-black text-[2.6rem] leading-[1] sm:leading-10 md:text-6xl lg:text-7xl font-helveticaNowText'>
            Como podemos ajudar?
          </h1>
          <section className="flex flex-wrap items-center gap-3 mt-10">
            {services.map(serviceButton => (
              <button 
                key={serviceButton.name} 
                onClick={() => setService(services.find(s => s.name === serviceButton.name) as typeof service)}
                className={
                  "flex items-center justify-center select-none lg:w-auto px-4 py-[0.35rem] lg:py-4 text-sm lg:text-[16px] font-matterRegular leading-4 rounded-full h-[2.75rem] lg:h-auto bg-brand duration-200 gap-2 "
                  + (service.name === serviceButton.name ? 'bg-white text-black invert border-2 border-black sm:border-0' : '')
                }
              >
                {serviceButton.name}{serviceButton.icon && <img src={serviceButton.icon} alt="" className="w-5 h-5" />}
              </button>
            ))}
          </section>
        </header>
        <div className='relative flex flex-col flex-auto gap-20 lg:gap-32'>
          <section className="bg-[#e2e0d6] w-full h-auto sm:h-[33rem] rounded-2xl md:rounded-[2.8rem] flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-3 p-4 md:p-10">
            <picture ref={tilt} style={{ transition: 'box-shadow 0.1s, transform 0.1s' }} className="select-none w-full h-[25vh] md:h-auto lg:h-full col-span-2 bg-[#cbc9c0] overflow-hidden rounded-lg md:rounded-3xl block my-0 mx-auto hover:cursor-pointer">
              <img loading='lazy' src={service.image} alt={service.name} className='object-cover object-top w-full h-full' />
            </picture>
            <span className="flex flex-col justify-center gap-2 sm:gap-5 md:px-5">
              <h3 className="text-2xl md:text-4xl xl:text-[2.6rem] font-matterSemiBold">{service.name}</h3>
              <span className="text-[1rem] lg:text-xl font-helveticaNowText">{service.description}</span>
            </span>
          </section>
        </div>
      </div>
    </div>
  )
}