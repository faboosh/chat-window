const aliases = (prefix = `src`) => ({
    '@native': `${prefix}/lib/native`,
    '@browser': `${prefix}/lib/browser`,
    '@shared': `${prefix}/lib/shared`,
    '@components': `${prefix}/components`,
    '@config': `${prefix}/config`,
    '@ws-chat': `${prefix}/lib`,
    '@audio': `${prefix}/lib/audio`,
    '@enums': `${prefix}/enums`,
    '@hooks': `${prefix}/lib/hooks`,
    '@icons': `${prefix}/components/atoms/Icons`,
    '@styles': `${prefix}/styles`,
    '@utils': `${prefix}/utils`,
    '@state': `${prefix}/state`,
    '@types': `${prefix}/types`,
    '@storybookHelpers': `../.storybook/helpers`,
  });

module.exports = aliases