import { ConnectButton } from '@rainbow-me/rainbowkit'
import { color } from 'framer-motion'

export const ConnectButtom = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                color: 'purple'
              }
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type='button'
                    className='group relative inline-block overflow-hidden rounded-xl border border-purple-100 bg-purple-200 px-2 lg:px-6 py-3 text-sm font-semibold text-purple-500 hover:text-purple-500 focus:outline-none focus:ring active:bg-purple-600 active:text-white'
                  >
                    <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-purple-400 transition-all duration-500 group-hover:w-full'></span>
                    <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-purple-400 transition-all duration-500 group-hover:h-full'></span>
                    <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-purple-400 transition-all duration-500 group-hover:w-full'></span>
                    <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-purple-400 transition-all duration-500 group-hover:h-full'></span>
                    Connect Wallet
                  </button>
                )
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type='button'>
                    Wrong network
                  </button>
                )
              }

              return (
                <div
                  className='flex flex-col sm:flex-row gap-10 items-center text-neutral-600 mt-2'
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    fontSize: '16px'
                  }}
                >
                  <button
                    onClick={openChainModal}
                    className=' sm:hidden'
                    style={{ display: 'flex', alignItems: 'center' }}
                    type='button'
                  >
                    {chain.hasIcon && (
                      <div
                        className='text-neutral-600'
                        style={{
                          background: chain.iconBackground,
                          width: 20,
                          height: 20,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 20, height: 20 }}
                          />
                        )}
                      </div>
                    )}
                    <div className='sm:hidden'>{chain.name}</div>
                  </button>

                  <button onClick={openAccountModal} type='button'>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
