/** @jsxImportSource theme-ui */
import { useState, useImperativeHandle, forwardRef} from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { Box, Flex, Text } from 'theme-ui';

import { Cross2Icon } from '@radix-ui/react-icons';

type ToasterProps = {
  children: React.ReactNode
  bgColor: string
}

const Toaster = forwardRef((props: ToasterProps, forwardedRef) => {
  const { children, ...toastProps } = props;
  const [count, setCount] = useState(0);

  useImperativeHandle(forwardedRef, () => ({
    publish: () => setCount((count) => count + 1),
  }));

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <ToastPrimitive.Root key={index} {...toastProps} sx={{listStyleType: 'none'}}>
          <Box sx={{width: '100%', height: '100%', minWidth: '25vw', backgroundColor: toastProps.bgColor, border: '1px solid black', borderRadius: '5px', padding: '16px', paddingBottom: '32px', boxShadow: '1px 1px 5px darkslategray'}}>
            <Flex sx={{justifyContent: 'flex-end'}}>
              <ToastPrimitive.Close sx={{border: 'none', backgroundColor: 'transparent'}}>
                <Flex sx={{alignItems: 'center', fontWeight: '900'}}>
                  <Cross2Icon sx={{color: 'white'}} />
                </Flex>
              </ToastPrimitive.Close>
            </Flex>
            <ToastPrimitive.Description sx={{marginTop: '3'}}><Text px='4' sx={{variant: 'text.heading', fontSize: '4',color: 'white'}} >{children}</Text></ToastPrimitive.Description>
          </Box>
        </ToastPrimitive.Root>
      ))}
    </>
  );
});

export default Toaster;