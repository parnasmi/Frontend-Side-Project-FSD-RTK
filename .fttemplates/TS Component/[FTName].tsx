// template-folder-name -> [FTName].tsx
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';
import cls from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName]: FC<[FTName]Props> = (props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
}