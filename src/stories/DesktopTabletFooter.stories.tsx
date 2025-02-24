import DesktopTabletFooter from "../components/DesktopTabletFooter"

export default {
  component: DesktopTabletFooter,
  title: 'DesktopTabletFooter',
  tags: ['autodocs']
}

export const Stable = {
  args: {
    connectionStatus: "STABLE"
  }
}

export const Connecting = {
  args: {
    connectionStatus: "CONNECTING"
  }
}

export const Unstable = {
  args: {
    connectionStatus: "UNSTABLE"
  }
}

export const Disconnected = {
  args: {
    connectionStatus: "DISCONNECTED"
  }
}