import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as IOIcons from "react-icons/io";
import * as FAIcons from "react-icons/fa";

export const Social = [
  {
    title: 'Celular',
    information: '+55(21)979447656',
    icon: < AiIcons.AiOutlineWhatsApp color={'red'} size={'50px'} />,
    icon2: < BiIcons.BiPhoneCall color={'red'} size={'50px'} />
  },
  {
    title: 'Email',
    information: 'thiagodesouza.dev@gmail.com',
    icon: < HiIcons.HiOutlineMail color={'violet'}size={'50px'} />,
  },
  {
    title: 'Redes Sociais',
    information: '',
    icon: < BiIcons.BiWorld color={'blue'} size={'50px'} />,
    site1: 'https://www.facebook.com/thisouza1991/',
    rede1: <FiIcons.FiFacebook size={'15px'} />,
    site2: 'https://www.instagram.com/thisouza91/',
    rede2: <IOIcons.IoLogoInstagram size={'15px'} />,
    site3: 'https://www.linkedin.com/in/thisouzadev/',
    rede3: <FiIcons.FiLinkedin size={'15px'} />,
    site4: 'https://github.com/thisouzadev',
    rede4: <FAIcons.FaGithubAlt size={'15px'} />,
    site5: 'mailto:thiagodesouza.dev@gmail.com',
    rede5: <HiIcons.HiOutlineMail size={'15px'}/>,
  }
]

export const ContactData = [
  {
    site: 'https://www.facebook.com/thisouza1991/',
    icon: <FiIcons.FiFacebook size={'15px'} />,
    cName: 'nav-text'
  },
  {
    site: 'https://www.instagram.com/thisouza91/',
    icon: <IOIcons.IoLogoInstagram size={'15px'} />,
    cName: 'nav-text'
  },
  {
    site: 'https://www.linkedin.com/in/thisouzadev/',
    icon: <FiIcons.FiLinkedin size={'15px'} />,
    cName: 'nav-text'
  },
  {
    site: 'https://github.com/thisouzadev',
    icon: <FAIcons.FaGithubAlt size={'15px'} />,
    cName: 'nav-text'
  },
]
