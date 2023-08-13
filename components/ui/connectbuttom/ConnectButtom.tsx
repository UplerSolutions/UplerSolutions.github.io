import { ConnectButton } from '@rainbow-me/rainbowkit'

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
                    className='group relative inline-block overflow-hidden rounded border border-purple-100 bg-purple-200 px-2 lg:px-6 py-3 text-sm font-semibold text-purple-500 hover:text-purple-500 focus:outline-none focus:ring active:bg-purple-600 active:text-white'
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
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type='button'
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
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
