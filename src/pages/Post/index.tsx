import { PostInfo } from "./components/PostInfo";
import { PostContainer, MarkdownContainer, Code } from "./style";
import Markdown from "react-markdown";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdown = `# Inpositos Cumaeae

## Tectis timuitque regesta

Lorem markdownum locus, et reliquit audire congeriem, iuguloque, quam vino cum
*habuit iniusta*. Germani toto Canentem salix, calathis et Celadon eruta,
tyranni in.

    e(3 - php + bloatware_gateway, duplex);
    hub = frozen + textOverclocking;
    base.tft -= name_p;
    stack.crt_del += rteRecursion(language(software_meme_desktop, screenshot(
            file, pram, metadataNode), control_file_system + hypertext));

## Spes Solem parentis abluit Achivis

Ait habet sex satis, videbitur statuo, sis, exstincto. Iusto iam, genetrix fidem
candentia dubio illis Bellona pectusque qua? Examina hoc omnis plebe positi
Pallas, nec et memoratis maris pulcherrime! Loca Confremuere solum cortice eris
pugnem decimum frugiferas sucis iterum: dubiae!

    modemDropSram = waveform_surge;
    if (upload + system_sampling_android > smtp(1)) {
        webmaster += powerpoint(heuristic, file.leaderboard_snmp(
                rss_language_architecture), -2 + ospf);
        vdsl_topology = jsp;
    }
    podcast_isdn(configuration, pointPython, bitrateBrowser);
    var driveShellDebugger = payload * cybercrimeEdutainmentServer + kindle -
            wavelength.station(plug, errorScan);
    if (bar_jre(-5, file, vector_donationware(text_storage_real))) {
        primaryCharacter += multi;
    } else {
        modifier_dlc.frameTextHard(ics, variableAppletIso, 5);
    }

## Paritura patriaeque mihi

Fera profana et cibis semimarem dubitat Hesperio eadem clipeum atque *patuisse*
matrisque fugit sic eluserat miscet! Nisi si et adspexi facite sensum raptusque
mater, hic. Adiuvet ter?

    if (card_standby_certificate) {
        scrapingOasis -= beta;
        sector_memory_leak.suffix = ddr_scareware * dual_clipboard;
    } else {
        teraflops *= frameworkImap(paste_reality) - 5;
        ppga_type = yahooSoft(rdram_vfat_analog * 1, webcamWaveform,
                pageHandle);
        nicWord += 3;
    }
    hexadecimalMyspaceLocalhost = eMediaSocial(raid_reader_requirements -
            wpaColdGraymail, 448745 + ata, image) + pcbXmlMysql + edi /
            page_output;
    var byte = 1;

## Enim male prolis

Rarissima negavit quisquis adstantem murmur tam inter femina tibi, ille a parte
aquas sol saltem vivere, tibi
[ille](http://www.inploraret.com/epidauria-achillis.html). Subiecta qua; pro
nec, serpens intonuit simul [fessas
facis](http://pulsant.com/adessenttmolus.php). Me dumque pedum fui ille virtute
ictaque inpleratque umbrae, iam lacusque aenae, est sume. Imbrem sic lascivitque
vidit canisve et credere litore ima amoribus. Natum Priamidenque contigit faciem
Amymonen stimulos matri, murice cum.

**Sum peracta** nocet hoc ibat mihi terra telluris parens, tibi. [Illinc saepes
aeraque](http://dux-est.org/vomentesfrequentat.html) thalamos ingeniumque in
tutae si et sit? Videt tenet, cum demugitaeque mulcet Achilles natura, tales
soli Stygias? Toro rude rostro proque, bracchia involvitur tamen nova excusat.
Potente deae?

Qua et quae dextra exaestuat carinas novissima patrium proceresque dum alto
causa ille *coepere bene*, hasta. Secundo illo recentia meum erit credo et
exempla ingens seposuisse loquetur gente; ambagibus **corporis iungi**. Rigido
sic virtute iuris praedamque defecta adhuc, spatiantur in loquor! **Factae
fruges dextra** vertere *Latona repetitum* Castore deus quam *fecit spectans
tamen* adspicit [fortuna](http://sisyphioages.io/).
`

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <MarkdownContainer>

        <Markdown
          components={{
            pre: "article",
            code: ({ children, className }) => (
              <Code language={className?.replace("language-", "") || "js"} style={dracula} >
                {children}
              </Code>
            ),
          }}
        >
          {markdown}
        </Markdown>
      </MarkdownContainer>
    </PostContainer>
  )
}