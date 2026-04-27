/**
 * Drop-in replacement for `lucide-react` using Ionicons 5 (Apple-designed,
 * iOS-style). Filled / rounded icons matching the look of iPhone UI.
 *
 * Usage — just replace the import source:
 *   ❌  import { Star, Home } from "@/src/components/ui/icons";
 *   ✅  import { Star, Home } from "@/src/components/ui/icons";
 *
 * All existing props (`size`, `className`, `color`, `fill`, `strokeWidth`)
 * continue to work. `strokeWidth` is silently ignored since these icons are
 * filled shapes.
 */
import type { ComponentType, SVGAttributes } from "react";
import type { IconBaseProps } from "react-icons";
import {
  IoPulse,
  IoArrowBack,
  IoArrowForward,
  IoArrowUpCircle,
  IoRibbon,
  IoBook,
  IoBriefcase,
  IoBusiness,
  IoCalendar,
  IoCheckmarkCircle,
  IoChevronDown,
  IoChevronBack,
  IoChevronForward,
  IoClipboard,
  IoCompass,
  IoCard,
  IoEarth,
  IoLogoFacebook,
  IoDocumentText,
  IoDocumentsOutline,
  IoGlobe,
  IoSchool,
  IoHeadset,
  IoHeart,
  IoHeartCircle,
  IoHelpCircle,
  IoHome,
  IoInformationCircle,
  IoLogoInstagram,
  IoKey,
  IoLanguage,
  IoGrid,
  IoAnalytics,
  IoLogoLinkedin,
  IoMail,
  IoMap,
  IoLocation,
  IoExpand,
  IoMenu,
  IoChatbubble,
  IoChatbubbleEllipses,
  IoMic,
  IoContract,
  IoCreate,
  IoCall,
  IoAirplane,
  IoPlay,
  IoAdd,
  IoRocket,
  IoSearch,
  IoSend,
  IoShield,
  IoShieldCheckmark,
  IoSparkles,
  IoStar,
  IoMedical,
  IoLocate,
  IoTrendingUp,
  IoTrophy,
  IoLogoTwitter,
  IoPersonCircle,
  IoPersonAdd,
  IoPeople,
  IoClose,
  IoFlash,
} from "react-icons/io5";

type Props = IconBaseProps & {
  className?: string;
  style?: SVGAttributes<SVGElement>["style"];
  strokeWidth?: number | string;
  fill?: string;
};

/** Wraps an Ionicons component so it:
 *  - Accepts (and ignores) lucide-compatible `strokeWidth`.
 *  - Defaults to a 24px size so drop-in behaviour matches lucide.
 */
const wrap =
  (Ico: ComponentType<IconBaseProps>) =>
  ({ strokeWidth: _ignored, size = 24, ...rest }: Props) =>
    <Ico size={size} {...rest} />;

/* ---------- Name-compatible exports ---------- */
export const Activity = wrap(IoPulse);
export const ArrowLeft = wrap(IoArrowBack);
export const ArrowRight = wrap(IoArrowForward);
export const ArrowUpRight = wrap(IoArrowUpCircle);
export const Award = wrap(IoRibbon);
export const BookOpen = wrap(IoBook);
export const Briefcase = wrap(IoBriefcase);
export const Building2 = wrap(IoBusiness);
export const Calendar = wrap(IoCalendar);
export const CheckCircle2 = wrap(IoCheckmarkCircle);
export const ChevronDown = wrap(IoChevronDown);
export const ChevronLeft = wrap(IoChevronBack);
export const ChevronRight = wrap(IoChevronForward);
export const ClipboardList = wrap(IoClipboard);
export const Compass = wrap(IoCompass);
export const CreditCard = wrap(IoCard);
export const Earth = wrap(IoEarth);
export const Facebook = wrap(IoLogoFacebook);
export const FileCheck2 = wrap(IoDocumentsOutline);
export const FileText = wrap(IoDocumentText);
export const Globe = wrap(IoGlobe);
export const GraduationCap = wrap(IoSchool);
export const Headphones = wrap(IoHeadset);
export const Heart = wrap(IoHeart);
export const HeartHandshake = wrap(IoHeartCircle);
export const HelpCircle = wrap(IoHelpCircle);
export const Home = wrap(IoHome);
export const Info = wrap(IoInformationCircle);
export const Instagram = wrap(IoLogoInstagram);
export const Key = wrap(IoKey);
export const Languages = wrap(IoLanguage);
export const Layout = wrap(IoGrid);
export const LineChart = wrap(IoAnalytics);
export const Linkedin = wrap(IoLogoLinkedin);
export const Mail = wrap(IoMail);
export const Map = wrap(IoMap);
export const MapPin = wrap(IoLocation);
export const Maximize = wrap(IoExpand);
export const Menu = wrap(IoMenu);
export const MessageCircle = wrap(IoChatbubble);
export const Mic = wrap(IoMic);
export const Minimize = wrap(IoContract);
export const Pencil = wrap(IoCreate);
export const Phone = wrap(IoCall);
export const Plane = wrap(IoAirplane);
export const Play = wrap(IoPlay);
export const Plus = wrap(IoAdd);
export const Quote = wrap(IoChatbubbleEllipses);
export const Rocket = wrap(IoRocket);
export const Search = wrap(IoSearch);
export const Send = wrap(IoSend);
export const Shield = wrap(IoShield);
export const ShieldCheck = wrap(IoShieldCheckmark);
export const Sparkles = wrap(IoSparkles);
export const Star = wrap(IoStar);
export const Stethoscope = wrap(IoMedical);
export const Target = wrap(IoLocate);
export const TrendingUp = wrap(IoTrendingUp);
export const Trophy = wrap(IoTrophy);
export const Twitter = wrap(IoLogoTwitter);
export const UserCircle2 = wrap(IoPersonCircle);
export const UserPlus = wrap(IoPersonAdd);
export const Users = wrap(IoPeople);
export const X = wrap(IoClose);
export const Zap = wrap(IoFlash);
