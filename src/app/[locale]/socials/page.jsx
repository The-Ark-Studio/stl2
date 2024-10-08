import Link from "next/link";
import FacebookKo from '@pub/img/icon/faceBookKO.svg';
import FacebookEN from '@pub/img/icon/facebookEN.svg';
import InstagramKo from '@pub/img/icon/instagramKO.svg';
import InstagramEN from '@pub/img/icon/instagramEN.svg';
import TikTokKo from '@pub/img/icon/tiktokKO.svg';
import TikTokEN from '@pub/img/icon/tiktokEN.svg';
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Social = () => {
  const locale = useLocale();
  const t = useTranslations('footer.stay_in_touch');
  return (
    <>
      <ul>
        <li>
          <Link href={t('facebook')} target="_blank">
            <Image src={locale === 'ko' ? FacebookKo.src : FacebookEN.src} alt="Description" width={50} height={50} />
          </Link>
        </li>
        <li>
          <Link href={t('instagram')} target="_blank">
            <Image src={locale === 'ko' ? InstagramKo.src : InstagramEN.src} alt="Description" width={50} height={50} />
          </Link>
        </li>
        <li>
          <Link href={t('tiktok')} target="_blank">
            <Image src={locale === 'ko' ? TikTokKo.src : TikTokEN.src} alt="Description" width={50} height={50} />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Social;
