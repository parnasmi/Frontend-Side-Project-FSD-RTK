// template-folder-name -> [FTName].tsx
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import cls from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName] = (props:[FTName]Props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
}