import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FAIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as IMIcons from "react-icons/im";
import * as FiIcons from "react-icons/fi";
import * as IOIcons from "react-icons/io";

export const SidebarData = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'INFORMAÇÕES PESSOAIS',
    path: '/informacoes-pessoais',
    icon: <FAIcons.FaUserSecret />,
    cName: 'nav-text'
  },
  {
    title: 'SKILLS',
    path: '/skills',
    icon: <GiIcons.GiSkills />,
    cName: 'nav-text'
  },
  {
    title: 'EXPERIÊNCIA',
    path: '/experiencia',
    icon: <GiIcons.GiSchoolBag />,
    cName: 'nav-text'
  },
  {
    title: 'GRADUAÇÃO',
    path: '/graduacao',
    icon: <FAIcons.FaUserGraduate />,
    cName: 'nav-text'
  },
  {
    title: 'CONTATO',
    path: '/contato',
    icon: <FAIcons.FaPhoneVolume />,
    cName: 'nav-text'
  },
  {
    title: 'RESUMO.PDF',
    path: '/resumo',
    icon: <IMIcons.ImFloppyDisk />,
    cName: 'nav-text'
  },
  {
    title: 'PROJETOS',
    path: '/projetos',
    icon: <GiIcons.GiFilmProjector />,
    cName: 'nav-text'
  }
]

export const ContactData = [
  {
    site: 'https://www.facebook.com/thisouza1991/',
    icon: <FiIcons.FiFacebook />,
    cName: 'nav-text'
  },
  {
    site: 'https://www.instagram.com/thisouza91/',
    icon: <IOIcons.IoLogoInstagram />,
    cName: 'nav-text'
  },
  {
    site: 'https://www.linkedin.com/in/thisouzadev/',
    icon: <FiIcons.FiLinkedin />,
    cName: 'nav-text'
  },
  {
    site: 'https://github.com/thisouzadev',
    icon: <FAIcons.FaGithubAlt />,
    cName: 'nav-text'
  },
]