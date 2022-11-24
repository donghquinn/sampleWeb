import React from 'react';
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: '가격',
    description:
      '정기 구독을 통해 택시 호출 비용을 절약할 수 있습니다.',
    icon: GlobeAltIcon,
  },
  {
    name: '호출',
    description:
      '승차 거부 없이 안정적으로 택시를 호출하고 배차해 드립니다.',
    icon: ScaleIcon,
  },
  {
    name: '예약',
    description:
      '최소 30분 이전에 미리 예약을 하여 스케쥴 관리에도 유용합니다.',
    icon: BoltIcon,
  },
  {
    name: '테마',
    description:
      '여러분들의 성향, 상황 등에 맞는 택시를 구독할 수 있습니다.',
    icon: DevicePhoneMobileIcon,
  },
]

function About() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">또타는 무엇일까요?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">간편하고 안정적인 맞춤형 택시 정기 구독 서비스</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            보다 저렴한 가격으로 여러분의 성향에 맞는 기사님의 택시를 구독하세요
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default About;


/**
 * <div>
      <div>
        <h1 className='about-title'>또타란?</h1>
      </div>
      <div>
      <p style={{textAlign: 'center'}}>또타는 고객 맞춤형 택시 구독 서비스입니다.</p>
      <p style={{textAlign: 'center'}}>여러분의 성향과 취향에 맞는 택시를 사용하세요.</p>
      <p style={{textAlign: 'center'}}>구독권 결제를 통해 더 저렴한 가격으로 택시를 사용할 수 있습니다.</p>
      <p style={{textAlign: 'center'}}>기사님들도 안정적인 수익과 고객 확보하실 수 있습니다.</p>
      </div>
      <div className='divider'></div>
      <div>
      <p style={{textAlign: 'center', fontWeight: "bold", fontSize: '140%'}}>이용자 여러분!</p>
      <p style={{textAlign: 'center'}}>택시를 자주 타야 하는데 그 비용이 부담스러우셨나요?</p>
      <p style={{textAlign: 'center'}}>사랑스러운 우리 아이와 함께 택시를 타야 해서 걱정이 많으신가요?</p>
      <p style={{textAlign: 'center'}}>반려견과 함께 외출을 나왔는데 기사님이 승차를 거부하신 경험이 있으신가요?</p>
      <p style={{textAlign: 'center'}}>구독권 결제를 통해 원하는 시간에 저렴한 가격에 택시를 이용할 수 있습니다.</p>
      <p style={{textAlign: 'center'}}>우리 가족을 위한 맞춤형 테마 택시를 사용하실 수 있습니다.</p>
    <div> </div>
      <p style={{textAlign: 'center', fontWeight: "bold", fontSize: '140%'}}>기사님!</p>
      <p style={{textAlign: 'center'}}>어제 탑승한 승객분이 기사님의 단골 손님이 되셨습니다!</p>
      <p style={{textAlign: 'center'}}>기사님의 택시를 탑승하고자 하는 이용자가 많으셔서 이번 달 정산 금액이 상당하시네요!</p>
      <p style={{textAlign: 'center'}}>이처럼 구독 서비스를 통해 이용객의 수를 늘려 고정 수익 또한 플러스가 되는 혜택을 누릴 수 있습니다.</p>
      </div>
    </div>
 */