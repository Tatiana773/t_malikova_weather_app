import { useTranslation } from 'react-i18next';
import "../i18n";

export const PageNotFound = () => {
  const { t } = useTranslation();
    return (
      <div>
        <p>
          {t("city.messages.not found")}
        </p>
      </div>
    )
  } 