"use client"

import { useState } from "react"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"
import { cn } from "@/lib/utils"

const infraTools = [
  { name: "Mikrotik", desc: "RouterOS & switching" },
  { name: "UniFi", desc: "Enterprise wireless" },
  { name: "pfSense", desc: "Firewall & UTM" },
  { name: "WireGuard", desc: "VPN tunnels" },
  { name: "VLAN", desc: "Network segmentation" },
  { name: "DNS", desc: "Domain management" },
  { name: "Load Balancer", desc: "Traffic distribution" },
  { name: "Nginx", desc: "Reverse proxy" },
]

const terminalClass = "h-auto max-h-none max-w-full"

function MikrotikTerminal() {
  return (
    <Terminal className={terminalClass}>
      <TypingAnimation>&gt; /ip firewall filter print</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ 24 active rules loaded</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ NAT masquerade - WAN active</AnimatedSpan>
      <AnimatedSpan className="text-yellow-500">⚠ Queue tree - bandwidth shaping 100Mbps</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ DHCP server - 47 leases assigned</AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">RouterOS v7.x - system stable.</TypingAnimation>
    </Terminal>
  )
}

function UniFiTerminal() {
  return (
    <Terminal className={terminalClass}>
      <TypingAnimation>&gt; unifi-controller --status</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ 4 Access Points online</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ 32 clients connected</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">ℹ Channel optimization - auto-assigned</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Guest portal - captive portal active</AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">All APs healthy. Signal strong.</TypingAnimation>
    </Terminal>
  )
}

function PfSenseTerminal() {
  return (
    <Terminal className={terminalClass}>
      <TypingAnimation>&gt; pfctl -sr | head</TypingAnimation>
      <AnimatedSpan className="text-yellow-500">⚠ DDoS detected - 8.2k req/s from botnet</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Rate limiter activated - traffic shaped</AnimatedSpan>
      <AnimatedSpan className="text-yellow-500">⚠ Brute force SSH - 103.xx.xx.xx blocked</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Snort IDS - 0 alerts in last 24h</AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">Firewall operational. All threats blocked.</TypingAnimation>
    </Terminal>
  )
}

function WireGuardTerminal() {
  return (
    <Terminal className={terminalClass}>
      <TypingAnimation>&gt; wg show</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ Tunnel wg0 - 3 peers connected</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">ℹ Peer 1: 10.0.0.2 - last handshake 12s ago</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">ℹ Peer 2: 10.0.0.3 - last handshake 8s ago</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Transfer: 2.4 GiB received, 890 MiB sent</AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">VPN tunnel stable. Encrypted.</TypingAnimation>
    </Terminal>
  )
}

function VlanTerminal() {
  return (
    <Terminal className={terminalClass}>
      <TypingAnimation>&gt; show vlan brief</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ VLAN 10 - Management (192.168.10.0/24)</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ VLAN 20 - Staff (192.168.20.0/24)</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ VLAN 30 - IoT isolated (192.168.30.0/24)</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Inter-VLAN routing - ACLs applied</AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">Network segmented. Zones secured.</TypingAnimation>
    </Terminal>
  )
}

function DnsTerminal() {
  return (
    <Terminal className={terminalClass}>
      <TypingAnimation>&gt; dig www.akhmadqasim.com</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ A record → 104.xx.xx.xx (Cloudflare)</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ CNAME www → akhmadqasim.com</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ MX → mail provider configured</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">ℹ DNSSEC - validated and signed</AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">DNS resolving correctly. TTL: 300s.</TypingAnimation>
    </Terminal>
  )
}

function LoadBalancerTerminal() {
  return (
    <Terminal className={terminalClass}>
      <TypingAnimation>&gt; lb --status</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ Primary: 10.0.1.1 - healthy (12ms)</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Secondary: 10.0.1.2 - healthy (15ms)</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">ℹ Algorithm: round-robin weighted</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Auto-failover tested - 200ms switchover</AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">Load balanced. 99.99% uptime.</TypingAnimation>
    </Terminal>
  )
}

function NginxTerminal() {
  return (
    <Terminal className={terminalClass}>
      <TypingAnimation>&gt; nginx -t &amp;&amp; systemctl status nginx</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ Configuration test - syntax ok</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ SSL/TLS - auto-renewed</AnimatedSpan>
      <AnimatedSpan className="text-blue-500">ℹ Upstream: 3 backends proxied</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ HTTP/2 + gzip - compression enabled</AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">Reverse proxy active. All upstreams green.</TypingAnimation>
    </Terminal>
  )
}

const terminals = [
  MikrotikTerminal,
  UniFiTerminal,
  PfSenseTerminal,
  WireGuardTerminal,
  VlanTerminal,
  DnsTerminal,
  LoadBalancerTerminal,
  NginxTerminal,
]

export function InfraSection() {
  const [selected, setSelected] = useState(0)
  const SelectedTerminal = terminals[selected]

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Network Infrastructure
          </h2>
          <p className="mt-4 text-muted-foreground">
            Click a tool to see it in action
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {infraTools.map((tool, i) => (
              <button
                key={tool.name}
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                className={cn(
                  "rounded-xl border p-4 text-left transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  selected === i
                    ? "border-foreground bg-muted"
                    : "hover:bg-muted/50"
                )}
              >
                <p className="font-medium">{tool.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tool.desc}
                </p>
              </button>
            ))}
          </div>

          <SelectedTerminal key={selected} />
        </div>
      </div>
    </section>
  )
}
