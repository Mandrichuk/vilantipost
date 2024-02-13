import React from 'react';
import images from "../../../constants/index";

function AllowedGoods() {
  const arr= ["Документы для деловой переписки и офисной работы: Приглашения, конверты, корреспонденция", "Юридические документы: Договоры, контракты, претензии, доверенности",
  "Финансовые документы: Бухгалтерские и нотариальные документы, счета, отчеты, акты"," Личные документы: Паспорта, визы, свидетельства о разводе, о рождении детей, дипломы", " Прочие документы: Сертификаты, свидетельства, документы с апостилем",  
  ]

  return (
    <div className={`bg-custom-color-50 w-full rounded-lg py-3 px-3 sectionMargin`}>
        <div className={`containerTitleText mb-3`}>What do we deliver?</div>
        {arr.map((item, index) => (
          <li className={`articleText my-2`}>
            {item}
            
          </li>
        ))}
        <div className={`flex items-center justify-center`}>
          <img src={images.delivery} alt={`documents`} className={`object-cover`} />
        </div>
    </div>
  );
}

export default AllowedGoods;