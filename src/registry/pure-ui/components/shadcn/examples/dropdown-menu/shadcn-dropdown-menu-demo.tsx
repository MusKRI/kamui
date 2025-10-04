"use client";

import {
  SettingsIcon,
  PenLine,
  Link,
  CirclePlus,
  ListChecks,
  FileCheck,
  NotepadText,
  Presentation,
  Folder,
  FolderSymlink,
  Sparkles,
  FileOutput,
  FileText,
  Sheet,
  Droplet,
  Palette,
  Smile,
  Image,
  Paintbrush,
  Settings,
  Lock,
  Bell,
  Users,
  FileText as FileTextIcon,
  Archive,
  WandSparkles,
  LayoutTemplate,
  Star,
  Save,
  Library,
  HeartPlus,
  EyeOff,
  Layers2,
  Package2,
  Trash2,
} from "lucide-react";

import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuLabel,
} from "@/registry/pure-ui/components/shadcn/ui/dropdown-menu";
import { Button } from "@/registry/pure-ui/components/shadcn/ui/button";

export const DropdownMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          reduceMotion
          variant="ghost"
          className="flex items-center gap-2"
          size="sm"
        >
          <SettingsIcon size={16} />
          <span className="text-sm">Account settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <PenLine size={16} color="#7b7a80" />
            <span className="flex-1">Rename</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <Link size={16} color="#7b7a80" />
            <span className="flex-1">Copy Link</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              <CirclePlus size={16} color="#7b7a80" />
              <span className="flex-1">Create New</span>
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <ListChecks size={16} color="#7b7a80" />
                <span className="flex-1">List</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <FileCheck size={16} color="#7b7a80" />
                <span className="flex-1">Doc</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <NotepadText size={16} color="#7b7a80" />
                <span className="flex-1">Form</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Presentation size={16} color="#7b7a80" />
                <span className="flex-1">Whiteboard</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Folder size={16} color="#7b7a80" />
                <span className="flex-1">Folder</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <FolderSymlink size={16} color="#7b7a80" />
                <span className="flex-1">Sprint Folder</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Sparkles size={16} color="#7b7a80" />
                <span className="flex-1">From Template</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="cursor-pointer">
                <div className="flex items-center gap-3 w-full">
                  <FileOutput size={16} color="#7b7a80" />
                  <span className="flex-1">Import</span>
                </div>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex items-center gap-3 w-full">
                    <FileText size={16} color="#7b7a80" />
                    <span className="flex-1">As PDF</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex items-center gap-3 w-full">
                    <Sheet size={16} color="#7b7a80" />
                    <span className="flex-1">As Excel Sheet</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              <Droplet size={16} color="#7b7a80" />
              <span className="flex-1">Color & Icon</span>
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Palette size={16} color="#7b7a80" />
                <span className="flex-1">Custom Color</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Paintbrush size={16} color="#7b7a80" />
                <span className="flex-1">Color Themes</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Image size={16} color="#7b7a80" />
                <span className="flex-1">Change Icon</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Smile size={16} color="#7b7a80" />
                <span className="flex-1">Add Emoji</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              <Settings size={16} color="#7b7a80" />
              <span className="flex-1">Space Settings</span>
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Lock size={16} color="#7b7a80" />
                <span className="flex-1">Privacy & Permissions</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Bell size={16} color="#7b7a80" />
                <span className="flex-1">Notifications</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Users size={16} color="#7b7a80" />
                <span className="flex-1">Manage Members</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <FileTextIcon size={16} color="#7b7a80" />
                <span className="flex-1">General Settings</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Archive size={16} color="#7b7a80" />
                <span className="flex-1">Archive Space</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              <WandSparkles size={16} color="#7b7a80" />
              <span className="flex-1">Templates</span>
            </div>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Library size={16} color="#7b7a80" />
                <span className="flex-1">Browse Templates</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Star size={16} color="#7b7a80" />
                <span className="flex-1">Favorite Templates</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Save size={16} color="#7b7a80" />
                <span className="flex-1">Save as Template</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <LayoutTemplate size={16} color="#7b7a80" />
                <span className="flex-1">My Templates</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <HeartPlus size={16} color="#7b7a80" />
            <span className="flex-1">Add to Favorites</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <div className="flex items-start gap-3 w-full">
            <EyeOff size={16} color="#7b7a80" className="shrink-0 h-[1lh]" />
            <div className="flex flex-col">
              <span className="flex-1">Hide Space</span>
              <DropdownMenuLabel className="text-[12px] font-light text-(--muted-foreground)">
                Yo'll retain access to this Space, but it won't show in your
                sidebar
              </DropdownMenuLabel>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <Layers2 size={16} color="#7b7a80" />
            <span className="flex-1">Duplicate</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <Package2 size={16} color="#7b7a80" />
            <span className="flex-1">Archive</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-500/20 focus:border-red-500/10">
          <div className="flex items-center gap-3 w-full">
            <Trash2 size={16} />
            <span className="flex-1">Delete</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="p-1">
          <Button className="w-full text-sm" size="sm">
            Manage Permissions
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
