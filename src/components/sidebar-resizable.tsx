'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Nav } from './sidebar-nav'
import { ScrollArea } from './ui/scroll-area'
import { LinksNav } from './links-navigation-sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'

interface MailProps {
  accounts?: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  defaultLayout?: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize?: number
  children?: React.ReactNode
}

export function SidebarResizable({
  accounts,
  children,
  defaultLayout = [20, 80],
  defaultCollapsed = true,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes,
          )}`
        }}
        className="h-full w-full items-stretch "
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true,
            )}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false,
            )}`
          }}
          className={cn(
            'hidden md:flex flex-col relative transition-all duration-300 ease-in-out',
            isCollapsed && 'min-w-[50px] max-h-screen',
          )}
        >
          <ScrollArea>
            <div className="h-screen flex flex-col justify-between">
              <div
                className={cn(
                  'flex h-[52px] sticky top-0 backdrop-blur-xl shadow-md border-b items-center justify-center',
                  isCollapsed ? 'h-[52px]' : 'px-2',
                )}
              >
                {/* <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} /> */}
                logi
              </div>

              <Nav
                className="h-full"
                isCollapsed={isCollapsed}
                links={LinksNav as any}
              />

              <div
                className={cn(
                  'flex h-[52px] sticky bottom-0 border-t backdrop-blur-xl items-center justify-center',
                  isCollapsed ? 'h-[52px]' : 'px-2',
                )}
              >
                {/* <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} /> */}
                logi
              </div>
            </div>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle className="hidden md:flex" withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          className="hidden md:flex"
        >
          <ScrollArea className="max-h-screen min-w-full overflow-auto">
            <div className="max-h-screen w-full">{children}</div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden absolute top-4 left-4"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <ScrollArea className="h-screen">
            <Nav isCollapsed={isCollapsed} links={LinksNav as any} />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </TooltipProvider>
  )
}
