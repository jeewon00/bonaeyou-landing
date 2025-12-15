import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Video, Share, MoreHorizontal } from 'lucide-react';

export type MessageType = 'sms' | 'lms' | 'mms';

interface MessageMockupProps {
  type: MessageType;
  theme: 'dark' | 'light';
}

export const MessageMockup: React.FC<MessageMockupProps> = ({ type, theme }) => {
  const isDark = theme === 'dark';
  
  // Phone Frame Color
  // const borderColor = isDark ? 'border-neutral-700' : 'border-neutral-300'; // Not used in current styling but kept logic idea
  
  return (
    // Reduced base width/height for mobile (w-[220px] h-[420px])
    // Kept larger size for sm+ screens (w-[320px] h-[640px])
    <div className={`relative w-[220px] h-[420px] sm:w-[320px] sm:h-[640px] rounded-[2rem] sm:rounded-[3rem] border-[6px] sm:border-8 ${isDark ? 'border-neutral-800' : 'border-neutral-100'} bg-white overflow-hidden shadow-2xl transition-all duration-300`}>
      {/* Notch - Scaled down */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 sm:w-32 sm:h-6 bg-black rounded-b-lg sm:rounded-b-xl z-20" />
      
      {/* Status Bar Mock - Scaled down */}
      <div className="w-full px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center text-[8px] sm:text-[10px] font-bold text-black z-10 bg-neutral-50">
        <span>9:41</span>
        <div className="flex gap-1">
            <div className="w-3 sm:w-4 h-2 sm:h-2.5 bg-black rounded-[1px] opacity-80" />
            <div className="w-0.5 h-2 sm:h-2.5 bg-black rounded-[1px] opacity-30" />
        </div>
      </div>

      {/* App Header - Scaled down */}
      <div className="bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200 p-1.5 sm:p-2 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-0.5 sm:gap-1 text-blue-500">
          <ChevronLeft size={16} className="sm:w-6 sm:h-6" />
        </div>
        <div className="flex flex-col items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center mb-0.5 sm:mb-1">
                <MoreHorizontal size={12} className="text-white sm:w-4 sm:h-4" />
            </div>
            <span className="text-[8px] sm:text-[10px] text-black font-medium">보내유 &gt;</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 pr-1 sm:pr-2 text-blue-500">
          <Video size={14} className="sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Message Area */}
      <div className="p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 h-full bg-white overflow-y-hidden">
        
        {/* Render specific content based on Type */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-start max-w-[90%] sm:max-w-[85%]"
        >
          <div className="bg-neutral-100 rounded-2xl rounded-tl-sm p-3 sm:p-4 text-[10px] sm:text-sm text-black shadow-sm relative">
            {/* Tail */}
            <div className="absolute top-0 -left-1.5 w-2 h-2 sm:w-3 sm:h-3 bg-neutral-100 [clip-path:polygon(100%_0,100%_100%,0_0)]" />
            
            {type === 'sms' && (
                <div className="flex flex-col gap-0.5 sm:gap-1">
                    <p className="font-bold mb-0.5">[Web발신]</p>
                    <p className="leading-relaxed">
                        안녕하세요. 00님,<br/>
                        보내유 서비스가 출시되었습니다.<br/>
                        많은 관심 부탁드립니다.
                    </p>
                </div>
            )}

            {type === 'lms' && (
                <div className="flex flex-col gap-1 sm:gap-2">
                    <p className="font-bold text-xs sm:text-base">[보내유] 공지 사항</p>
                    <p className="text-[8px] sm:text-xs text-neutral-500">[Web발신]</p>
                    <p className="leading-relaxed">
                        안녕하세요 00님, 보내유입니다.
                    </p>
                    <p className="leading-relaxed mt-1 sm:mt-2">
                        다른 대량 문자 발송 서비스와 달리,<br/>
                        모든 문자를 형태와 상관없이 무료로 이용하실 수 있는 보내유 서비스가 오픈했습니다!
                    </p>
                    <p className="leading-relaxed mt-1 sm:mt-2">
                        많은 관심과 가입 부탁드립니다 :)
                    </p>
                    <div className="mt-1 sm:mt-2 pt-1 sm:pt-2 border-t border-neutral-300 text-[8px] sm:text-xs text-neutral-500">
                         ※ 이 메세지는 보내유 서비스에 관심이 있는 고객을 대상으로 전달됩니다.
                    </div>
                </div>
            )}

            {type === 'mms' && (
                <div className="flex flex-col gap-1 sm:gap-2">
                     <p className="font-bold text-xs sm:text-base">[보내유] 연말 깜짝 혜택</p>
                     <p className="text-[8px] sm:text-xs text-neutral-500">[Web발신]</p>
                     <p className="font-bold">고객님 한정 혜택!</p>
                     <p className="leading-relaxed">
                        다른 문자 발송 서비스는<br/>
                        문자 1건당 50원 ~ 100원까지 비용이 발생할 수 있어요.
                     </p>
                     <p className="leading-relaxed mt-1 sm:mt-2">
                        아래 링크를 통해 사전 예약을 진행하시면, 문자 형태와 상관 없이 모두 무료로 사용 가능합니다!
                     </p>
                     <div className="mt-0.5 sm:mt-1">
                        <p className="font-bold">[사전 예약 링크]</p>
                        <a href="https://walla.my/a/boneyou" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline cursor-pointer break-all">walla.my/a/boneyou</a>
                     </div>
                </div>
            )}
          </div>
        </motion.div>

        {/* MMS Specific Image Card - Scaled for mobile */}
        {type === 'mms' && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="self-start max-w-[90%] sm:max-w-[85%] mt-0.5 sm:mt-1"
            >
                <div className="rounded-2xl sm:rounded-3xl bg-[#151515] p-4 sm:p-6 text-white flex flex-col justify-between h-[140px] sm:h-[200px] shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-base sm:text-2xl font-bold leading-tight">보내유는<br/>모든 문자가<br/>무료!</p>
                    </div>
                    <div className="relative z-10 self-end flex items-baseline">
                        <span className="text-4xl sm:text-6xl font-black italic">0</span>
                        <span className="text-lg sm:text-2xl font-bold ml-1">₩</span>
                    </div>
                    {/* Decorative circles from logo */}
                    <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full opacity-10" />
                </div>
                <div className="flex justify-end mt-1.5 sm:mt-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-neutral-200 flex items-center justify-center bg-white shadow-sm text-blue-500">
                        <Share size={12} className="sm:w-4 sm:h-4" />
                    </div>
                </div>
            </motion.div>
        )}
      </div>

      {/* Home Indicator - Scaled */}
      <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-32 h-1 bg-black rounded-full" />
    </div>
  );
};