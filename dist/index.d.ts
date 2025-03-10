import type appdmgType from 'appdmg';
export type ElectronInstallerDMGOptions = {
    /**
     * The `.app` directory generated by Electron Packager.
     */
    appPath: string;
    /**
     * The application name.
     */
    name: string;
    /**
     * The title of the produced DMG, which will be shown when mounted.
     *
     * @defaultValue the {@link ElectronInstallerDMGOptions.name | application name}
     */
    title?: string;
    /**
     * Path to the background image for the DMG window. Image should be of size 658x498.
     *
     * If you need to want to add a second Retina-compatible size, add a separate `@2x` image.
     * For example, if your image is called `background.png`, create a `background@2x.png` that is
     * double the size.
     */
    background?: string;
    /**
     * Path to the icon to use for the app in the DMG window.
     */
    icon?: string;
    /**
     * How big to make the icon for the app in the DMG.
     *
     * @defaultValue 80
     */
    iconSize?: number;
    /**
     * Overwrite an existing DMG file if if already exists.
     */
    overwrite?: boolean;
    /**
     * The content that will appear in the window when user opens the `.dmg` file.
     *
     * @defaultValue An array of two icons: the application and the `/Applications` destination folder.
     */
    contents?: appdmgType.SpecificationContents[] | ((opts: ElectronInstallerDMGOptions) => appdmgType.SpecificationContents[]);
    /**
     * Disk image format.
     *
     * Must be one of the following:
     *  - `UDRW` -> read/write image
     *  - `UDRO` -> read-only image
     *  - `UDCO` -> ADC-compressed image
     *  - `UDZO` -> zlib-compressed image
     *  - `UDBZ` -> bzip2-compressed image
     *  - `ULFO` -> lzfse-compressed image (macOS 10.11+ only)
     *
     * @defaultValue `UDZO`
     */
    format?: 'UDRW' | 'UDRO' | 'UDCO' | 'UDZO' | 'UDBZ' | 'ULFO';
    /**
     * Additional options to pass through to [`appdmg`](https://npm.im/appdmg)
     *
     * You can use this to set additional features like `background-color` and
     * `code-sign`.  See the docs of the `appdmg` module for all possible options.
     */
    additionalDMGOptions?: Omit<appdmgType.Specification, 'title' | 'contents' | 'icon' | 'icon-size' | 'background' | 'format'>;
} & ({
    /**
     * The directory to put the DMG into. This option cannot be specified at the same time as `dmgPath`.
     *
     * Defaults to `process.cwd()`.
     */
    out?: string;
} | {
    /**
     * The full path to write the DMG to. This option cannot be specified at the same time as `out`.
     */
    dmgPath: string;
});
export declare const createDMG: (opts: Readonly<ElectronInstallerDMGOptions>) => Promise<void>;
