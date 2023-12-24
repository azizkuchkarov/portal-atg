import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

const faqs = [
  {
    question: "Положения",
    answer: [
      {
        text: "HS-RG-001 работа РПО",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-001%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D0%A0%D0%9F%D0%9E.pdf?updatedAt=1703349728548",
      },
      {
        text: "HS-RG-002 работа на высоте",
        link: "https://example.com/anothehttps://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-002%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D0%BD%D0%B0%20%D0%B2%D1%8B%D1%81%D0%BE%D1%82%D0%B5.pdf?updatedAt=1703349728780r",
      },
      {
        text: "HS-RG-003 положение ГПМ (2)",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-003%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%93%D0%9F%D0%9C%20(2).pdf?updatedAt=1703349731430",
      },
      {
        text: "HS-RG-004 положение талонная система",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-004%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B0%D0%BB%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0.pdf?updatedAt=1703349726456",
      },
      {
        text: "HS-RG-005 положение ПДК в Бухарском ОУМГ (перевод)",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-005%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%94%D0%9A%20%D0%B2%20%D0%91%D1%83%D1%85%D0%B0%D1%80%D1%81%D0%BA%D0%BE%D0%BC%20%D0%9E%D0%A3%D0%9C%D0%93%20(%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4).pdf?updatedAt=1703349726613",
      },
      {
        text: "HS-RG-006 положение ПТК в Бухарском ОУМГ (перевод)(1)",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-006%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%A2%D0%9A%20%D0%B2%20%D0%91%D1%83%D1%85%D0%B0%D1%80%D1%81%D0%BA%D0%BE%D0%BC%20%D0%9E%D0%A3%D0%9C%D0%93%20(%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4)(1).pdf?updatedAt=1703349726128",
      },
      {
        text: "HS-RG-007 положение ДПД в Бухарском ОУМГ (перевод)",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-007%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%94%D0%9F%D0%94%20%D0%B2%20%D0%91%D1%83%D1%85%D0%B0%D1%80%D1%81%D0%BA%D0%BE%D0%BC%20%D0%9E%D0%A3%D0%9C%D0%93%20(%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4).pdf?updatedAt=1703349726089",
      },
      {
        text: "HS-RG-008 Положение по ВДООС (на печать)",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-008%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%20%D0%92%D0%94%D0%9E%D0%9E%D0%A1%20(%D0%BD%D0%B0%20%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C).pdf?updatedAt=1703349726188",
      },
      {
        text: "HS-RG-009 Положение_по_экологическому_производственному_контролю",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-009%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE_%D1%8D%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%BC%D1%83_%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC%D1%83_%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8E.pdf?updatedAt=1703349726593",
      },
      {
        text: "HS-RG-010 Положение_об обязанностях по ТБ и ООС должностей БОУМГ",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-010%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE%D0%B1%20%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8F%D1%85%20%D0%BF%D0%BE%20%D0%A2%D0%91%20%D0%B8%20%D0%9E%D0%9E%D0%A1%20%D0%B4%D0%BE%D0%BB%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9%20%D0%91%D0%9E%D0%A3%D0%9C%D0%93.pdf?updatedAt=1703349731692",
      },
      {
        text: "HS-RG-011 положение_о_службах_ГЗ",
        link: "https://ik.imagekit.io/ay4noc1kbk/1.%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F/HS-RG-011%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE_%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0%D1%85_%D0%93%D0%97.pdf?updatedAt=1703349731995",
      },
      // Add more links as needed
    ],
  },
  {
    question: "Инструкции",
    answer: [
      {
        text: "000перечень инструкций 2023 согласованный с ГИ промбез",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/000%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%8C%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B9%202023%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%81%20%D0%93%D0%98%20%D0%BF%D1%80%D0%BE%D0%BC%D0%B1%D0%B5%D0%B7.pdf?updatedAt=1703350614375",
      },
      {
        text: "AD_INST_2022_001_инструкция по приему продуктов питания на объектах БОУМГ",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_001_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%D1%83%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2%20%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0%D1%85%20%D0%91%D0%9E%D0%A3%D0%9C%D0%93.pdf?updatedAt=1703350609514",
      },
      {
        text: "AD_INST_2022_002_Иструкция по проверке санитарного состояния кухонных помещений1",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_002_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B5%20%D1%81%D0%B0%D0%BD%D0%B8%D1%82%D0%B0%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F%20%D0%BA%D1%83%D1%85%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BF%D0%BE%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B91.pdf?updatedAt=1703350610159",
      },
      {
        text: "AD_INST_2022_003_Иструкция по выполнению дезинфекционной обработки на объектах БОУМГ",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_003_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%B4%D0%B5%D0%B7%D0%B8%D0%BD%D1%84%D0%B5%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0%D1%85%20%D0%91%D0%9E%D0%A3%D0%9C%D0%93.pdf?updatedAt=1703350614735",
      },
      {
        text: "AD_INST_2022_004_Иструкция по охране труда для маляра",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_004_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%B0%D0%BB%D1%8F%D1%80%D0%B0.pdf?updatedAt=1703350614505",
      },
      {
        text: "AD_INST_2022_005_Иструкция по охране труда для плотника",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_005_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BB%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B0.pdf?updatedAt=1703350614734",
      },
      {
        text: "AD_INST_2022_006_Иструкция по охране труда для столяра",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_006_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D1%81%D1%82%D0%BE%D0%BB%D1%8F%D1%80%D0%B0.pdf?updatedAt=1703350614768",
      },
      {
        text: "AD_INST_2022_007_Иструкция по охране труда для штукатура",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_007_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D1%88%D1%82%D1%83%D0%BA%D0%B0%D1%82%D1%83%D1%80%D0%B0.pdf?updatedAt=1703350615040",
      },
      {
        text: "AD_INST_2022_008_Иструкция по охране труда для каменщика",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_008_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%89%D0%B8%D0%BA%D0%B0.pdf?updatedAt=1703350615246",
      },
      {
        text: "AD_INST_2022_009_Иструкция по охране труда для бетонщика",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_009_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%B5%D1%82%D0%BE%D0%BD%D1%89%D0%B8%D0%BA%D0%B0.pdf?updatedAt=1703350615476",
      },
      {
        text: "AD_INST_2022_0010_Иструкция по охране труда при монтаже и ремонте водопроводных и канализационных сетей",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_0010_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%BC%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%20%D0%B8%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D0%B5%20%D0%B2%D0%BE%D0%B4%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D1%85%20%D0%B8%20%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D1%81%D0%B5%D1%82%D0%B5%D0%B9.pdf?updatedAt=1703350611144",
      },
      {
        text: "AD_INST_2022_0011_Иструкция по охране труда при работах в колодцах водопроводных и канализационных систем",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_0011_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%85%20%D0%B2%20%D0%BA%D0%BE%D0%BB%D0%BE%D0%B4%D1%86%D0%B0%D1%85%20%D0%B2%D0%BE%D0%B4%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D1%85%20%D0%B8%20%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC.pdf?updatedAt=1703350609278",
      },
      {
        text: "AD_INST_2022_0012_Иструкция по охране труда при работе на газонокосилке",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_0012_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%20%D0%BD%D0%B0%20%D0%B3%D0%B0%D0%B7%D0%BE%D0%BD%D0%BE%D0%BA%D0%BE%D1%81%D0%B8%D0%BB%D0%BA%D0%B5.pdf?updatedAt=1703350609306",
      },
      {
        text:"AD_INST_2022_0013_Иструкция по охране труда при уборке территорий компрессорных станций",
        link: "https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_0013_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D1%83%D0%B1%D0%BE%D1%80%D0%BA%D0%B5%20%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B9%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%BD%D1%8B%D1%85%20%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B9.pdf?updatedAt=1703350609624",
      },
      {
        text:"AD_INST_2022_0014_Иструкция по охране труда для садовника",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_0014_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B4%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA%D0%B0.pdf?updatedAt=1703350609885",
      },
      {
        text:"AD_INST_2022_0015_Иструкция по охране труда для заведующего хозяйством",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_0015_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D1%83%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%20%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%BE%D0%BC.pdf?updatedAt=1703350609731",
      },
      {
        text:"AD_INST_2022_0016_Иструкция по охране труда для сантехника",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/AD_INST_2022_0016_%D0%98%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%BD%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0.pdf?updatedAt=1703350609707",
      },
      {
        text:"HS_INST_001_вводный инструктаж по охране труда техники и промбезопасности",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_001_%D0%B2%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%B0%D0%B6%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%B8%20%D0%BF%D1%80%D0%BE%D0%BC%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf?updatedAt=1703350615352",
      },
      {
        text:"HS_INST_002_вводный_противопожарный_инструктаж",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_002_%D0%B2%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2%D0%BE%D0%BF%D0%BE%D0%B6%D0%B0%D1%80%D0%BD%D1%8B%D0%B9_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%B0%D0%B6.pdf?updatedAt=1703350615663"
      },
      {
        text:"HS_INST_003_инструкция по оказанию первой доврачебной помощи",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_003_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D1%8E%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%B2%D1%80%D0%B0%D1%87%D0%B5%D0%B1%D0%BD%D0%BE%D0%B9%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8.pdf?updatedAt=1703350618906",
      },
      {
        text:"HS_INST_004_инструкция по охране труда при выполнении работ на высоте",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_004_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%20%D0%BD%D0%B0%20%D0%B2%D1%8B%D1%81%D0%BE%D1%82%D0%B5.pdf?updatedAt=1703350618777",
      },
      {
        text:"HS_INST_005_инструкция по охране труда при отборе проб воздушной среды",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_005_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%BE%D1%82%D0%B1%D0%BE%D1%80%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B1%20%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%88%D0%BD%D0%BE%D0%B9%20%D1%81%D1%80%D0%B5%D0%B4%D1%8B.pdf?updatedAt=1703350619500",
      },
      {
        text:"HS_INST_006_Инструкция_по_обращению_с_отходами_1_класса_ртутьсодержащие1",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_006_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D1%8E_%D1%81_%D0%BE%D1%82%D1%85%D0%BE%D0%B4%D0%B0%D0%BC%D0%B8_1_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0_%D1%80%D1%82%D1%83%D1%82%D1%8C%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%89%D0%B8%D0%B51.pdf?updatedAt=1703350619785"
      },
      {
        text:"HS_INST_007_инструкция по обращению с ТБО",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_007_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D1%8E%20%D1%81%20%D0%A2%D0%91%D0%9E.pdf?updatedAt=1703350619876",
      },
      {
        text:"HS_INST_008_Инструкция_по_обращению_с_отходами_3_4_класса_масла,_шлам",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_008_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D1%8E_%D1%81_%D0%BE%D1%82%D1%85%D0%BE%D0%B4%D0%B0%D0%BC%D0%B8_3_4_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0_%D0%BC%D0%B0%D1%81%D0%BB%D0%B0,_%D1%88%D0%BB%D0%B0%D0%BC.pdf?updatedAt=1703350620251",
      },
      {
        text:"HS_INST_009_инструкция по отбору проб для анализа сточных вод",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_009_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%82%D0%B1%D0%BE%D1%80%D1%83%20%D0%BF%D1%80%D0%BE%D0%B1%20%D0%B4%D0%BB%D1%8F%20%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%20%D1%81%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D1%85%20%D0%B2%D0%BE%D0%B4.pdf?updatedAt=1703350620238"
      },
      {
        text:"HS_INST_010_Инструкция_по_обращению с отходами цветных и черных металлов",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_010_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D1%8E%20%D1%81%20%D0%BE%D1%82%D1%85%D0%BE%D0%B4%D0%B0%D0%BC%D0%B8%20%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D1%85%20%D0%B8%20%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D1%85%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D0%BE%D0%B2.pdf?updatedAt=1703350621763",
      },
      {
        text:"HS_INST_011_инструкция по отбору проб воды на технические и бытовые нужды",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_011_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%82%D0%B1%D0%BE%D1%80%D1%83%20%D0%BF%D1%80%D0%BE%D0%B1%20%D0%B2%D0%BE%D0%B4%D1%8B%20%D0%BD%D0%B0%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B8%20%D0%B1%D1%8B%D1%82%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BD%D1%83%D0%B6%D0%B4%D1%8B.pdf?updatedAt=1703350620439",
      },
      {
        text:"HS_INST_012_Инструкция_по обращению с пищевыми отходами и эксплуатации полигонов ТБО",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_012_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D1%8E%20%D1%81%20%D0%BF%D0%B8%D1%89%D0%B5%D0%B2%D1%8B%D0%BC%D0%B8%20%D0%BE%D1%82%D1%85%D0%BE%D0%B4%D0%B0%D0%BC%D0%B8%20%D0%B8%20%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BF%D0%BE%D0%BB%D0%B8%D0%B3%D0%BE%D0%BD%D0%BE%D0%B2%20%D0%A2%D0%91%D0%9E.pdf?updatedAt=1703350620394",
      },
      {
        text:"HS_INST_013_Инструкция по действиям персонала при возникновении и ликвидации аварии на КС",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_013_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F%D0%BC%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%B2%D0%BE%D0%B7%D0%BD%D0%B8%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%B8%20%D0%BB%D0%B8%D0%BA%D0%B2%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D0%B8%20%D0%B0%D0%B2%D0%B0%D1%80%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%9A%D0%A1.pdf?updatedAt=1703350623344",
      },
      {
        text:"HS_INST_014_инструция по содержанию и  применению первичных средств пожаротушения",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_014_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%B8%D1%8E%20%D0%B8%20%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BF%D0%B5%D1%80%D0%B2%D0%B8%D1%87%D0%BD%D1%8B%D1%85%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%20%D0%BF%D0%BE%D0%B6%D0%B0%D1%80%D0%BE%D1%82%D1%83%D1%88%D0%B5%D0%BD%D0%B8%D1%8F.pdf?updatedAt=1703350623857",
      },
      {
        text:"HS_INST_015_Инструкция по по охране труда при проведении ТО и испытаний ГПМ",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_015_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%A2%D0%9E%20%D0%B8%20%D0%B8%D1%81%D0%BF%D1%8B%D1%82%D0%B0%D0%BD%D0%B8%D0%B9%20%D0%93%D0%9F%D0%9C.pdf?updatedAt=1703350623970",
      },
      {
        text:"HS_INST_016_Инструкция по охране труда при проведении работ в замкнутом пространстве",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_016_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%20%D0%B2%20%D0%B7%D0%B0%D0%BC%D0%BA%D0%BD%D1%83%D1%82%D0%BE%D0%BC%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B5.pdf?updatedAt=1703350625251",
      },
      {
        text:"HS_INST_017_инструкция по охране труда при выполнении работ_на_открытом_воздухе_при_низких_температурах",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_017_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82_%D0%BD%D0%B0_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%BC_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B5_%D0%BF%D1%80%D0%B8_%D0%BD%D0%B8%D0%B7%D0%BA%D0%B8%D1%85_%D1%82%D0%B5%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0%D1%85.pdf?updatedAt=1703350625052",
      },
      {
        text:"HS_INST_018_инструкция по охране труда при выполнении работ на открытом воздухе при высоких температурах",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_018_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%20%D0%BD%D0%B0%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%BC%20%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B5%20%D0%BF%D1%80%D0%B8%20%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D1%85%20%D1%82%D0%B5%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0%D1%85.pdf?updatedAt=1703350625568"
      },
      {
        text:"HS_INST_019_инструкция по охране труда для посетителей хим лаборатории",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_019_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BE%D1%81%D0%B5%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%20%D1%85%D0%B8%D0%BC%20%D0%BB%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B8.pdf?updatedAt=1703350625460",
      },
      {
        text:"HS_INST_020_Инструкция по охране труда при работе с опасными химическими веществами (прекурсорами)",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_020_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%20%D1%81%20%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D1%8B%D0%BC%D0%B8%20%D1%85%D0%B8%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC%D0%B8%20%D0%B2%D0%B5%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0%D0%BC%D0%B8%20(%D0%BF%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%B0%D0%BC%D0%B8).pdf?updatedAt=1703350626078",
      },
      {
        text:"HS_INST_021_инструкция по охране труда при работе в химлабораториях",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_021_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%20%D0%B2%20%D1%85%D0%B8%D0%BC%D0%BB%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D1%8F%D1%85.pdf?updatedAt=1703350626372",
      },
      {
        text:"HS_INST_022_Инструкция по пожарной безопасности в химических лабораториях",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_022_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B6%D0%B0%D1%80%D0%BD%D0%BE%D0%B9%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B2%20%D1%85%D0%B8%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D0%BB%D0%B0%D0%B1%D0%BE%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D1%8F%D1%85.pdf?updatedAt=1703350626554",
      },
      {
        text:"HS_INST_023_Инструкция по охране труда при стравливании газа",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_023_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%B2%D0%BB%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B3%D0%B0%D0%B7%D0%B0.pdf?updatedAt=1703350627838",
      },
      {
        text:"HS_INST_024_Вводный_инструктаж_по_ООС (2)",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_024_%D0%92%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%B0%D0%B6_%D0%BF%D0%BE_%D0%9E%D0%9E%D0%A1%20(2).pdf?updatedAt=1703350629053",
      },
      {
        text:"HS_INST_025_инструкция по охране труда при эксплуатации БПТГ и ГРП",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_025_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%20%D1%82%D1%80%D1%83%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%20%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%91%D0%9F%D0%A2%D0%93%20%D0%B8%20%D0%93%D0%A0%D0%9F.pdf?updatedAt=1703350633121",
      },
      {
        text:"HS_INST_026 инструкция действия ЦДУ при ЧС",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_026%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F%20%D0%A6%D0%94%D0%A3%20%D0%BF%D1%80%D0%B8%20%D0%A7%D0%A1.pdf?updatedAt=1703350630978",
      },
      {
        text:"HS_INST_027 хранение имущества ГЗ_HSE_",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_027%20%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%D0%BC%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0%20%D0%93%D0%97_HSE_.pdf?updatedAt=1703350631845",
      },
      {
        text:"HS_INST_028_инстрункция по по уничтожению лекарственных средств",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/HS_INST_028_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%20%D1%83%D0%BD%D0%B8%D1%87%D1%82%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%BB%D0%B5%D0%BA%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2.pdf?updatedAt=1703350632360"
      },
      {
        text:"PS_INST_2022_010_Инструкции_по_безопасному_производству_работ_в",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/PS_INST_2022_010_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8_%D0%BF%D0%BE_%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D0%BC%D1%83_%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D1%83_%D1%80%D0%B0%D0%B1%D0%BE%D1%82_%D0%B2.pdf?updatedAt=1703350652720",
      },
      {
        text:"PS_INST_2022_012_Инструкция_по_охране_труда_при_набивке_смазкой",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/PS_INST_2022_012_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5_%D1%82%D1%80%D1%83%D0%B4%D0%B0_%D0%BF%D1%80%D0%B8_%D0%BD%D0%B0%D0%B1%D0%B8%D0%B2%D0%BA%D0%B5_%D1%81%D0%BC%D0%B0%D0%B7%D0%BA%D0%BE%D0%B9.pdf?updatedAt=1703350641559",
      },
      {
        text:"PS_INST_2022_015_Инструкция_по_охране_труда_при_производстве_земляных",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/PS_INST_2022_015_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5_%D1%82%D1%80%D1%83%D0%B4%D0%B0_%D0%BF%D1%80%D0%B8_%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5_%D0%B7%D0%B5%D0%BC%D0%BB%D1%8F%D0%BD%D1%8B%D1%85.pdf?updatedAt=1703350646237",
      },
      {
        text:"PS_INST_2022_017_Инструкция_по_охране_труда_при_поршневании_трубопровода",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/PS_INST_2022_017_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5_%D1%82%D1%80%D1%83%D0%B4%D0%B0_%D0%BF%D1%80%D0%B8_%D0%BF%D0%BE%D1%80%D1%88%D0%BD%D0%B5%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8_%D1%82%D1%80%D1%83%D0%B1%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%B0.pdf?updatedAt=1703350636696",
      },
      {
        text:"RC_INST_001_инструкция по ОТ  пр работе на промышленных стиральных и сушильных машинах",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/RC_INST_001_%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9E%D0%A2%20%20%D0%BF%D1%80%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D1%81%D1%82%D0%B8%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B8%20%D1%81%D1%83%D1%88%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0%D1%85.pdf?updatedAt=1703350635880"
      },
      {
        text:"RC_INST_002_Инструкция по ОТ при работе на промышленном сушильном цилиндрическом гладильном катке",
        link:"https://ik.imagekit.io/ay4noc1kbk/2.%20%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D0%B8/RC_INST_002_%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9E%D0%A2%20%D0%BF%D1%80%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC%20%D1%81%D1%83%D1%88%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D1%86%D0%B8%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%BC%20%D0%B3%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D0%BA%D0%B0%D1%82%D0%BA%D0%B5.pdf?updatedAt=1703350637491",
      }

     
      // Add more links as needed
    ],
  },
  // More FAQ items...
];


const FAQ = () => {
  return (
      <div className="mx-auto max-w-4xl ">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10  dark:divide-gray-600">
          <h className="text-lg font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
          Руководящие документы
          </h>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-600">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                        <span className="text-base font-semibold leading-7 dark:text-white">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <FontAwesomeIcon icon={faMinus} className="h-6 w-6" />
                          ) : (
                            <FontAwesomeIcon icon={faPlus} className="h-6 w-6" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    {faq.answer.map((link, linkIndex) => (
                      <p key={linkIndex}>
                        <a href={link.link} target="_blank" className="text-base leading-7 text-blue" rel="noreferrer">
                          {link.text}
                        </a>
                      </p>
                    ))}
                  </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  );
};

export default FAQ;
