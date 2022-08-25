import { createContext, ReactNode, useCallback, useState, useMemo, useEffect } from 'react';

interface AvatarProviderProps {
   children: ReactNode;
}

interface AvatarContextData {
   avatar: File | string;
   uploadAvatar: (file: File | string) => void;
   canvaAvatar: string;
   setCanvaAvatar: (value: string) => void;
   template: 'initial' | 'error' | 'cropping';
   setTemplate: (tmp: 'initial' | 'error' | 'cropping') => void;
   avatarScale: number;
   setAvatarScale: (sacel: number) => void;
   loadFileIsEnabled: boolean;
   setLoadFileIsEnabled: (value: boolean) => void;
}

export const AvatarContext = createContext({} as AvatarContextData);

export const AvatarProvider = ({ children }: AvatarProviderProps) => {
   const [avatar, setAvatar] = useState<File | string>({} as File);
   const [canvaAvatar, setCanvaAvatar] = useState<string>('');
   const [avatarScale, setAvatarScale] = useState<number>(1);
   const [template, setTemplate] = useState<'initial' | 'error' | 'cropping'>('initial');
   const [loadFileIsEnabled, setLoadFileIsEnabled] = useState<boolean>(true);

   const uploadAvatar = (file: File | string) => {
      setAvatar(file);
   };

   const providerValue = useMemo(() => {
      return {
         avatar,
         uploadAvatar,
         template,
         setTemplate,
         avatarScale,
         setAvatarScale,
         canvaAvatar,
         setCanvaAvatar,
         loadFileIsEnabled,
         setLoadFileIsEnabled,
      };
   }, [avatar, setAvatar, template, setTemplate, avatarScale, canvaAvatar]);

   return <AvatarContext.Provider value={providerValue}>{children}</AvatarContext.Provider>;
};
