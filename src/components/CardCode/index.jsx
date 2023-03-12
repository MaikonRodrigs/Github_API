import React, { useRef } from 'react';
import * as S from './styles';
import { QRCodeSVG } from 'qrcode.react';
import SyntaxHighlighter from "react-syntax-highlighter";
import * as theme from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useAutoAnimate } from '@formkit/auto-animate/react'

function CardCode({ QRCodeUser, jsonFetch, isNan }) {
  const [animationParent] = useAutoAnimate()
  const ref = useRef()
  return (
    <S.Container isNan={isNan}>
      <S.Code>
        <S.Dots>
          <S.IconClosed color="#ED6A5E" />
          <S.IconClosed color="#F4BF4F" />
          <S.IconClosed color="#61C554" />
        </S.Dots>
        <S.QRCode>
          <QRCodeSVG
            value={`https://github.com/${QRCodeUser}`}
            size={72}
            includeMargin={true}
            level="L"
          />
        </S.QRCode>
        <SyntaxHighlighter
          children={jsonFetch}
          language="json"
          style={theme.atomOneDark}
          showLineNumbers
          customStyle={{
            fontFamily: "oswald",
            letterSpacing: .5,
            fontSize: 16,
            borderRadius: 8,
            padding: "50px 30px 30px 30px",
            whiteSpace: "nowrap",
            width: 700,
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
          wrapLines={true}
        />
      </S.Code>
    </S.Container>
  )
}

export default CardCode;